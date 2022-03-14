#!/bin/bash
IFS=
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ERRS=0

# stick for folder over directory: https://github.com/MerginMaps/docs/issues/59

for i in \
  https://public.cloudmergin.com/projects/ \
  "](images/" \
  "](/" \
  "<alert" \
  "Note:" \
  "<img" \
  "<a" \
  "docs.qgis.org" \
  "help.cloudmergin.com" \
  "help.inputapp.io" \
  "https://github.com/" \
  "www.github.com/" \
  "subdirectory" \
  "\*\*Note\*\*:"
do
  echo "Checking for $i"
  A1=`grep -rn "$i" $SCRIPT_DIR/../src/ --include \*.md`
  if [ ! -z "$A1" ]
  then
   echo $A1
   echo "Error in $i!!"
   ERRS=$((ERRS + 1))
  fi
  echo "***************************"
done

echo "number or errors: $ERRS"
exit $ERRS