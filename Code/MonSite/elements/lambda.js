var tab=[1,2,3,4,1,6];

var petitsEntiers=tab.filter(c=>c<3); // 1=> true, 2=> true, 3=> false, 4 => false,1=> true, 6=>false
// 1,2,1


var petitsEntiers=[];
for(let c of tab){
    if(c<3){
        petitsEntiers.push(c);
    }
}