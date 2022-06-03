function animals(heads, legs){
  
let chicken
let cows
let anims=[]

for (i=0; i<=heads; i++) {
  if ((legs-(i*2))%4===0 && (i*2+(heads-i)*4)===legs) {
    chicken = i
    cows = heads-i
    anims = [i,heads-i]
    return anims
    break   
    }
  }
  return "No solutions"
}
