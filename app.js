var pronoun = ['the ','our ']
var adj = ['great ', 'big ']
var noun = ['jogger','racoon']

function Generator(vpronoun,vadj,vnoun){
  let dominiosGenerados=[];
  vpronoun.forEach((epronoun)=>{
    vadj.forEach((eadj)=>{
      vnoun.forEach((enoun)=>{
      let str = epronoun + eadj + enoun;
      dominiosGenerados.push(str);
      })
    })  
  })
  return dominiosGenerados;
}

console.log("Dominios-->",Generator(pronoun,adj,noun));