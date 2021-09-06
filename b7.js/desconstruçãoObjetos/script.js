
let person = {
    name:'Henrique',
    lastname:'Oliveira',
    age:26,
    social:{
        instagram:'heenriquesilver',
        github:'henriquee'
    },
    fullName: function(){
        return `${this.name} ${this.lastname}`
    }
};




let {name:personName='Aluno', lastname, age = 0} = person;
/*Perceba que o valor atribuido em: name e age, estão como padrão 
caso o objeto em questão não tenha recebido seus respectivos valores anteriormente.*/

console.log(personName, lastname, age);