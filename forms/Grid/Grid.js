row=prompt('Enter number of rows desired:')
rowInt=parseInt(row, 10)
column=prompt('Enter number of columns desired:')
columnInt=parseInt(column, 10)

for(i=0;i<rowInt;i++){
  document.writeln('<br />'+'*')
  for (j=1;j<columnInt;j++){
    document.writeln('*')}
    }