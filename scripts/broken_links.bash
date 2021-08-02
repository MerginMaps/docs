#!/bin/bash
IFS=
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"


A1=`grep -rn "src=\'images" $SCRIPT_DIR/../docs/content/`
A2=`grep -rn "src=\"images" $SCRIPT_DIR/../docs/content/`
B=`grep -rn "](images" $SCRIPT_DIR/../docs/content/`

echo "HTML IMG"
echo $A1
echo $A2
if [ ! -z "$A1" ] || [ ! -z "$A2" ]
then
 echo "IMG broken"
 exit 1;
fi
echo "***************************"

echo "MARKDOWN IMG"
echo $B
if [ ! -z "$B" ]
then
  echo "MARKDOWN broken"
  exit 1
fi
echo "***************************"

echo "ALL GOOD!"
exit 0