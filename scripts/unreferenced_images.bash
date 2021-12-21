#!/bin/bash
IFS=$'\n'
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
SRC_DIR=$SCRIPT_DIR/../src
USED_PICS=0
NOT_USED_PICS=0

PICS=`find src/ | grep -e png -e jpg -e svg`
stringarray=($PICS)

for i in "${stringarray[@]}"
do 
  bi="$(basename -- $i)"    
  A1=`grep -rn "$bi" $SRC_DIR --include \*.md --include \*.vue`
  if [ ! -z "$A1" ]
  then
   USED_PICS=$((USED_PICS + 1))
  else
   echo "$i is not used"
   NOT_USED_PICS=$((NOT_USED_PICS + 1))
  fi
done

echo "number or errors: $NOT_USED_PICS"
exit $NOT_USED_PICS