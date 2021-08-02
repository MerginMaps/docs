#!/bin/bash
IFS=
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"


A1=`grep -rn "src=\'/images" $SCRIPT_DIR/../docs/content/`
A2=`grep -rn "src=\"/images" $SCRIPT_DIR/../docs/content/`
B1=`grep -rn "](/images" $SCRIPT_DIR/../docs/content/`
B2=`grep -rn "](./images" $SCRIPT_DIR/../docs/content/`
B3=`grep -rn "](../images" $SCRIPT_DIR/../docs/content/`

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
echo $B1
echo $B2
echo $B3
if [ ! -z "$B1" ] || [ ! -z "$B2" ] || [ ! -z "$B3" ]
then
  echo "MARKDOWN broken"
  exit 1
fi
echo "***************************"

echo "ALL GOOD!"
exit 0