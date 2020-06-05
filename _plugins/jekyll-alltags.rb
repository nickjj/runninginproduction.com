# Original Authors: Tommy Sullivan http://superawesometommy.com, Robert Park http://exolucere.ca
# Modified by Nick Janetakis to strip out everything except returning specific tag data.
require 'yaml'

module Jekyll
  class AllTags < Liquid::Block
    include Convertible

    def initialize(tag_name, input, tokens)
      super
    end

    def render(context)
      context.registers[:directory] ||= Hash.new(0)

      source_dir = context.registers[:site].source
      listed_dir = File.expand_path(File.join(source_dir, 'tags'))

      directory_files = File.join(listed_dir, "*.md")
      files = Dir.glob(directory_files)

      length = files.length
      result = []

      context.stack do
        files.each_with_index do |filename, index|
          frontmatter = YAML.load_file(filename)

          context['file'] = {
            'tag' => frontmatter['tag'],
            'url' => frontmatter['url']
          }

          context['forloop'] = {
            'name' => 'directory',
            'length' => length,
            'index' => index + 1,
            'index0' => index,
            'rindex' => length - index,
            'rindex0' => length - index - 1,
            'first' => (index == 0),
            'last' => (index == length - 1)
          }

          result << nodelist.map{|n|
            if n.respond_to? :render
              n.render(context)
            else
              n
            end
          }.join("")
        end
      end

      result
    end
  end
end

Liquid::Template.register_tag('all_tags', Jekyll::AllTags)
