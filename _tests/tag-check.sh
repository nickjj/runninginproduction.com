#!/usr/bin/env bash

set -e

# Ensure every referenced tag in an episode or interview exists as a tag file.
diff --color -u <(for file in $(find _posts -type f)
do
    sed -n "/^tags:$/,/^title:/p" "${file}" | grep "^  - " | cut -d '"' -f 2
done | sort -u) <(basename -s .md tags/*.md | sort -u)

# Ensure every tag has a layout, url, title and description.
FILE_TAG_COUNT="$(grep "^tag: \".*\"$" -R tags/*.md | wc -l)"
FILE_LAYOUT_COUNT="$(grep "^layout: \"tags\"$" -R tags/*.md | wc -l)"
FILE_URL_COUNT="$(grep "^url: \".*\"$" -R tags/*.md | wc -l)"
FILE_TITLE_COUNT="$(grep "^title: \".*\"$" -R tags/*.md | wc -l)"
FILE_DESCRIPTION_COUNT="$(grep "^description:$" -R tags/*.md | wc -l)"

[[ "${FILE_TAG_COUNT}" = "${FILE_LAYOUT_COUNT}" \
    && "${FILE_TAG_COUNT}" = "${FILE_URL_COUNT}" \
    && "${FILE_TAG_COUNT}" = "${FILE_TITLE_COUNT}" \
    && "${FILE_TAG_COUNT}" = "${FILE_DESCRIPTION_COUNT}" ]]
