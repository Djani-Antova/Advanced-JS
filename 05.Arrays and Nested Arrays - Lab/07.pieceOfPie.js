function pieceOfPie(array, str1, str2) {
   
    let startIndex = array.indexOf(str1)
    let endIndex = array.indexOf(str2)
    let res = array.slice(startIndex, endIndex + 1);
    return res
    
}
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)