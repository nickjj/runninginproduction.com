# Developed by Nick Janetakis - https://nickjanetakis.com
#
# Usage in layouts: {{ content | audio_seek }}
# Usage in layouts: {{ content | human_time_to_seconds }}

require 'jekyll'
require 'nokogiri'

def hh_mm_ss_to_seconds(human_time)
  # This accepts hh:mm:ss, mm:ss or ss.
  human_time.split(':').map { |a| a.to_i }.inject(0) { |a, b| a * 60 + b}
end

module Jekyll
  module AudioSeek
    def audio_seek(content)
      doc = Nokogiri::HTML.fragment(content)
      # Stop if we could't parse with HTML.
      return content unless doc

      doc.xpath('h2[contains(text(), "Show Notes")]/following-sibling::ul[1]/li').each do |li|
        original_inner_html = li.inner_html
        split_delimiter = ' – '
        original_inner_html_split = original_inner_html.split(split_delimiter)

        seek_time_human = original_inner_html_split.first
        seek_time_seconds = hh_mm_ss_to_seconds(seek_time_human)

        rest = original_inner_html_split.last

        seek_link = "<a href='#' data-audio-seek='#{seek_time_seconds}'
                        class='audio-seek'>#{seek_time_human}</a>"

        new_inner_html = "#{seek_link}#{split_delimiter}#{rest}"

        li.inner_html = new_inner_html
      end

      doc.to_s
    end
  end

  module HumanTimeToSeconds
    def human_time_to_seconds(human_time)
      hh_mm_ss_to_seconds(human_time)
    end
  end
end

Liquid::Template.register_filter(Jekyll::AudioSeek)
Liquid::Template.register_filter(Jekyll::HumanTimeToSeconds)
