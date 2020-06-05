# Author: Nick Janetakis
#
# This is currently unused because I couldn't figure out how to call the
# template tag with a variable like this: {% tag_url {{tag}} %}
#
# It would be nice to use this instead of the all_tags template tag because
# it would mean getting rid of a nested loop.
require 'yaml'

module Jekyll
  class TagUrl < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super

      # The .strip is very necessary. Without it there's a trailing space in
      # the path so it will be not found. Tricky!
      @input = input.strip
    end

    def render(context)
      source_dir = context.registers[:site].source
      file =  "#{File.expand_path(File.join(source_dir, 'tags', @input))}.md"

      YAML.load_file(file)['url']
    end
  end
end

Liquid::Template.register_tag('tag_url', Jekyll::TagUrl)
