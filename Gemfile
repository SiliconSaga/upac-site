# Pins the `github-pages` gem so a local `bundle exec jekyll serve` runs the
# same Jekyll version and plugin set the deploy workflow builds with.
#
# First-time setup (after Ruby is installed), from the yggdrasil root:
#   ws exec upac-site bundle install
#   ws exec upac-site bundle exec jekyll serve --livereload
# then open http://127.0.0.1:4000/upac-site/
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

# Windows + JRuby don't ship tzinfo data; these provide it.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Ruby 3.4+ no longer bundles these as default gems.
gem "csv"
gem "logger"
gem "base64"
gem "bigdecimal"
