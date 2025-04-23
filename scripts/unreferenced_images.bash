#!/bin/bash
IFS=$'\n'
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
SRC_DIR=$SCRIPT_DIR/../src
USED_PICS=0
USED_XCF=0
NOT_USED_XCF=0
NOT_USED_PICS=0

PICS=`find src/ | grep -e png -e jpg -e svg -e PNG -e JPG -e SVG -e jpeg -e JPEG`
stringarray=($PICS)

for i in "${stringarray[@]}"
do 
  bi="$(basename -- $i)"    
  A1=`grep -rn "$bi" $SRC_DIR --include \*.md --include \*.vue --include \*.styl --include="config.mts"`
  if [ ! -z "$A1" ]
  then
   USED_PICS=$((USED_PICS + 1))
  else
   echo "$i is not used"
   NOT_USED_PICS=$((NOT_USED_PICS + 1))
  fi
done

XCF=`find src/ | grep -e xcf`
stringarray=($XCF)

for i in "${stringarray[@]}"
do 
  bi="$(basename -- $i)"
  biwe=${bi%xcf} # Remove file extension
  
  A2=`grep -rn "$biwe" $SRC_DIR --include \*.md --include \*.vue`
  if [ ! -z "$A2" ]
  then
   USED_XCF=$((USED_XCF + 1))
  else
   echo "$i is not needed anymore"
   NOT_USED_XCF=$((NOT_USED_XCF + 1))
  fi
done

ERRORS=$((NOT_USED_PICS + NOT_USED_XCF))

echo "number of used pictures: $USED_PICS"
echo "number of used XCF files: $USED_XCF"
echo "number of not used pictures: $NOT_USED_PICS"
echo "number of not used XCF: $NOT_USED_XCF"

echo "number of errors: $ERRORS"
exit $ERRORS