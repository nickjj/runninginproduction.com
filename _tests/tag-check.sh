#!/usr/bin/env bash

set -e

# Ensure every referenced tag in an episode or interview exists as a tag file.
diff --color -u <(for file in $(find _posts)
do
    [[ -f "${file}" ]] && sed -n "/^tags:$/,/^title:/p" "${file}" | grep "\S" \
        | tail -n +2 | head -n -1 | cut -d '"' -f 2
done | sort -u) <(cd tags && ls *.md | cut -d "." -f 1 | sort -u)

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
