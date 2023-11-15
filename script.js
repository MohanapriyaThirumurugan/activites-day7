 //2)cricle question
 class Cricle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    set radiuscricle2(n){
        this.radius=n; //set  theb value
    }
    get radiuscricle2(){
      return`${this.radius}`
    }
    set criclecolor(m){
      this.color=m;
    }
    get criclecolor(){
      return`${this.color}`
    }
    get toString(){
      return `cricle=[color=${this.color} radius=${this.radius}]`
    }
    get Area(){
      return Math.PI*this.radius*this.radius
    }
    get cricumference(){
      return 2*Math.PI*this.radius
    }

 }
 const obj1=new Cricle(1.0,"red")
 //obj1.radiuscricle2=2.3
 console.log(obj1.radiuscricle2);
 obj1.radiuscricle2=2.3
 console.log(obj1.radiuscricle2);// set the value
 console.log(obj1.criclecolor);
 obj1.criclecolor="yellow"
 console.log(obj1.criclecolor);
 console.log(obj1.toString);
 console.log(obj1.Area);
 console.log(obj1.cricumference);

 //1) movie question
 class movies{
  constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}

 }
 // a) contructor for the class movie
 //new object creation
 const movienew=new movies("leo","sveengreenstudio","PG15")
 console.log(movienew.title);
 console.log(movienew.studio);
 console.log(movienew.rating)
 //b)if no rating is given

 class Movie3{
  constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}

 }
 //new object creation
 const movienew3 =new Movie3("leo","sveengreenstudio")
 console.log(movienew3.title);
 console.log(movienew3.studio);
 console.log(movienew3.rating);

 //d) print the pg movies
 class movie1{
  constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
}
    function collectionmovies(movie2){
     const a=[]
    movie2.filter(movie1=>{
      if(movie1.rating=="pg"){
        a.push(movie1.rating)

      }
    })
    return a;
   }
  
 const movie2=[
  new movie1 ("leo","7green","pg"),
  new movie1 ("vikram","8green","pg12"),
  new movie1("vedhalam","9green","pg")
 ];
 const pgmovie=collectionmovies(movie2)
console.log(pgmovie);






 
 class Movie4{
  constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}

 }
 //new object creation
 const movienew4 =new Movie4("Casino Royale","eon productions","PG13")
 console.log(movienew4.title);
 console.log(movienew4.studio);
 console.log(movienew4.rating);

 //c)
 //3)writa a "person" class to hold all the details.
  class Person{
    constructor(name,age,gender,jobrole,place){
      this.name=name;
      this.age=age;
      this.gender=gender;
      this.jobrole=jobrole;
      this.place=place
    }
  }
  //  new obj creation
  const persontaldetails=new Person("mohanapriya",21,"female","mern full stack developer","chennai")
  console.log(persontaldetails.name);
  console.log(persontaldetails.age);
  console.log(persontaldetails.gender);
  console.log(persontaldetails.jobrole);
  console.log(persontaldetails.place); 

  //4) claculate the uber price
  // 1km=120rs
  class Uberprice{
    constructor(price){
      this.price=price
    }
    set value2(km){
      this.price=km*120
    }
    get value2(){
      return ` ${this.price}`
    }
  }
  // object creation 
  const newprice =new Uberprice(5)
  newprice.value2=10;
  console.log(newprice.value2);

