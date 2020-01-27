ng build --prod --base-href https://aluui.github.io/ImmanuelSchool/

sed -i 's/src=\"/src=\"\/ImmanuelSchool\//g' dist/index.html

sed -i 's/href=\"styles/href=\"\/ImmanuelSchool\/styles/g' dist/index.html

ngh
