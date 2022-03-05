/*
    "use strict"; //catch coding mistakes
    Variable types are: undefined, null, boolean,
    string, symbol, number, and object (variables are case sensitive)

    var testvariable = "I am everywhere"; //A global variable declaring if declared outside function (not using var is how you create global variables) locals are prioritized if same name
    testvariable = "I am everywhere too"; //Changing the variable assigning
    let testvariable2 = "I am limited in scope"; //A local variable
    const TESTVARIABLE3 = "I cannot be changed"; //USE ALL CAPS does not really work for arrays or objects
    Object.freeze(myinfo)
    console.log(testvariable);//Will only appear on log

    Arithmetic operators: + - * / ++ -- % += -= *= /=
    
    STRINGS:
    string \ is a escape character or use single quotes ' or backticks `'
    \n \r \t \b \f
    concatnate string: + or +=
    len: .length 
    get exact letter: string[0]
    
    ARRAYS:
    var arrayvar = ["abc",1];
    var nestedarray = ["abc",[1,2]];
    accessedelement = arrayvar[1];
    accessedelement2 = nestedarray[1][0];
    nestedarray.push(arrayvar); //add to end
     nestedarray.unshift(arrayvar); //add to beginning
    removedvariable = nestedarray.pop(); //deletes last value from arrya and returns it 
    removedvariable = nestedarray.shift(); //deletes first value from arrya and returns it 
    Change array to string: JSON.stringify(nestedarray)
    
    FUNCTIONS:
    function functionname(variable1,variable2){
        result = variable1 + variable2;
        return result;
    }
    functionname(1,2); //returns 3

    Anonymous Functions:
    var aVariable = function(){
        return new Date();
    }

    2:54
    
    const aVariable = () => new Date(); //Arrow functions
    var aconcatnededarrays = (a,b) => a.concat(b);
    


    Logic:
    == != converts to same type
    === !== does not convert to same type
    > >= < <=
    && || 
    || can be used to return alternative if one does not exist

    if (variable == 1){
        //True code
    } else if (variable == 2 ) {
        //ElseIf code
    } else {
        //False code
    }

    switch (variable){
        case 1:
            //code
            break;
        case 2:
            //code
            break;
        case 3:
        case 4:
        case 5:
            //common code
            break;
        default:
            //else code
            break;
    }   

    Ternary Operators:
    a == b ? true : false;
    a == b ? true : b==c ? true : false;

    OBJECTS:
    var myinfo = {
        "name": "Asim",
        "limbs": 4,
        "favourite Foods": ["Noodles","Momo","Meat"] 
        "body": {
            "head": 1,
            "hands": 2
        }    
    }; 

    var accessobjectproperty = myinfo.name; 
    var accessobjectpropertyifspace = myinfo["favourite Foods"];
    myinfo.name = "Asim Paudel"; //change object property 
    myinfo['eyes'] = "black"; //add a new property
    delete myinfo.eyes; //delete a property 
    myinfo.hasOwnProperty("name") //returns true
    var acessnestedproperty = myinfo.body.head; //or myinfo["body"]["head"]
    var myinfocopy = JSON.parse(JSON.stringify(myinfo)); //make a copy of object
    Object.freeze(myinfo) //make readonly

    LOOPS:
    var i = 0
    while (i<5){
        //run code
        i++
    }

    do {
        //run code
        i++
    } while (i<5)

    for (var i=0; i<5; i++){
        //run code
    }

    for(var i=0; i<arrayvar.length;i++){
        //run code
    }

    Others:
    Math.random(); //returns random decimal between 0 and 1 not including 1
    Math.floor(Math.random()*20); //rounds down gives 0 to 19 random no
    Math.floor(Math.random()*(maxrange - minrange + 1)) + minrange; //gives random betn maxrange and minrange

    Convesion between types:
    parseInt("101101",2); //parseInt(<string>, base of number)

    Try Cacth:
    try{
        //run code
    } catch(ex) {
        //run backup code
    }
    
    */