# Developed by Dmitry Ogarkov - https://github.com/d-ogarkov/jekyll-extlinks
#
# Modified by Nick Janetakis to auto-skip the site's URL
#
# Usage in your _config.yml:
#
# extlinks:
#   attributes: {rel: "noopener", target: "_blank"}
#   rel_exclude: ["host1.com", "host2.net"]
#
# - Relative links will not be processed.
# - Your site.url will not be processed.
# - attributes is non-optional (set the attributes you want).
# - rel_exclude is optional.
# - Links to hosts in rel_exclude will not have the rel attribute set.
# - Links with existing 'rel' attribute will be unchanged.
#
# Usage in your templates: {{ content | extlinks }}

require 'jekyll'
require 'nokogiri'

module Jekyll
  module ExtLinks
    # Access plugin config in _config.yml
    def config
      @context.registers[:site].config['extlinks']
    end

    def site_url
      @context.registers[:site].config['url']
    end

    # Checks if str contains any fragment of the fragments array
    def contains_any(str, fragments)
      return false unless Regexp.union(fragments) =~ str
      true
    end

    def extlinks(content)
      # Process configured link attributes and whitelisted hosts
      if config
        if config['attributes']
          attributes = Array(config['attributes'])
        end
        if config['rel_exclude']
          rel_exclude = Array(config['rel_exclude'])
        end
      end

      # Stop if no attributes were specified
      return content unless attributes

      doc = Nokogiri::HTML.fragment(content)

      # Stop if we could't parse with HTML
      return content unless doc

      doc.css('a').each do |a|
        # If this is the site URL don't change it
        next if contains_any(a.get_attribute('href'), site_url)

        # If this is a local link don't change it
        next unless a.get_attribute('href') =~ /\Ahttp/i

        attributes.each do |attr, value|
          if attr.downcase == 'rel'
            # If there's a rel already don't change it
            next unless !a.get_attribute('rel') || a.get_attribute('rel').empty?

            # Skip whitelisted hosts for the 'rel' attribute
            next if rel_exclude && contains_any(a.get_attribute('href'), rel_exclude)
          end
          a.set_attribute(attr, value)
        end
      end

      doc.to_s
    end
  end
end

Liquid::Template.register_filter(Jekyll::ExtLinks)
