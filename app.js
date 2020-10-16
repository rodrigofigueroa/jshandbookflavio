//// arrow functions

const thisIsAnArrow = () => {}
const thisIsAnotherArrow = props => console.log(props)
/// let
let one = '',
    two = ''
// const 
const PI = 3.1416
/// classes
class Phone {
    constructor( name, brand ){
        this.name = name,
        this.brand = brand,
        this.time = new Date()
    }

    start(){
        return `${this.name} ${this.brand} will turn on ${this.time}`
    }
    
    stop(){
        return `${this.name} ${this.brand} will turn off ${this.time}`
    }
} 
/// extends class
class Loading extends Phone{
    constructor(name, brand, logo){
        super(name, brand)
        this.logo = logo
    }

    starting(){
        return `${this.logo} ${this.logo}`
    }

}
const xiaomi = new Loading( 'P2', 'Xiaomi', 'Xiaomi Logo' )

/// default parameters

const thisIsADefaultPArameter = ( p = 0, p2 = 1) => {
    return p + p2
}

//console.log(thisIsADefaultPArameter(2, 0))

//// spread operator 
let spreading = [0, 1, 2, 3, 4, 5],
    nameSpread = 'Rodrigo',
    anotherArray = [...spreading],
    saveArraySpread = [...nameSpread],
    inserIntoAnotherArray = [...spreading,6, 7, 8]
let spreadObject = {
        name: 'Carlos'
    },
    newObject = { ...spreadObject },
    twoNumbers = [ 5, 5]

    //console.log(thisIsADefaultPArameter(...twoNumbers))

    // destructuring assignment 

    let  objectOne = {
        name: 'rod',
        age: 26,
        addres: {
            street: 'Nort 11',
            hose: 'pink'
        }
    }

    const { name : n , age , addres : {
        street,
        hose: house
    }}  = objectOne

    //console.log(`${n} ${age} ${street}`)

    // enhanced object literals get superpowers

        const y = 'y'
        const ObjPower = {
            y
        }
        //console.log(ObjPower.y)
        //proto

        const hello = {
            name: 'rod',
            place: 'city'
        }
        const ObjectTwowithPowers = {
            __proto__: hello,
            street: 'Nowhere'
        }

        //console.log(ObjectTwowithPowers.place)
        //super
        const objectOneWithPowers = {
            key: '0154',
            open: () => 'Opening'
        }

        const door = {
            __proto__: objectOneWithPowers,
            one: 'door',
            start(){
                return super.open() + ' ' + this.one
            }
        }
        //console.log(door.start())

        const ObjectWithOnepower = {
            ['a' + '_' + 'b'] : 'Diferent names'
        }

        //console.log(ObjectWithOnepower.a_b)

        // for of
        let fr = [ 'This', 'is', 'ForEach' ]

        fr.forEach( ( item, i ) => {
            // console.log(item, i)
        })

        for( let v of [ 1, 2, 3 ] ){
            // console.log(v)
            if(v === 2){
                break;
            }
        }

        for( let [ item , value ] of [ 'this', 'is', 'for of', 'with', 'entries'].entries() ){
            // console.log(value, item)
        }

        // array.prototype.includes
            if( ![ 1, 2 ].indexOf(3) ){
                // console.log('Not Found IndexOf')
            }
            if( ![ 1, 2 ].includes(3)){
                // console.log( 'Not Found Includes' )
            }

            //exponentiation Operator Math.pow vs ** exponent
                // 2 Exp 2 8
                // console.log(`${ Math.pow( 4, 2 ) } Vs ${ 4 ** 2 }`)

            // ES8 Padding string with padStart() and padEnd()
            let pdStart = ''
                // pdStart = 'test'.padStart(5, 'abd')
                pdStart = 'test'.padEnd(7, '124')

                // console.log(pdStart)
        // object values and Object entries
            let ObjectOne = {
                name: 'AnaSophia Robb',
                age: 26
            }
            let ArrayOne = [
                'Demetra',
                30
            ]

            // console.log(Object.values(ObjectOne))
            // console.log(Object.values(ArrayOne))
            // console.log(Object.entries(ObjectOne))
            // console.log(Object.entries(ArrayOne))
        
        // getOwnPropertyDescriptor()

        const objectForDEscriptor = {
            set name(name){
                console.log(name)
            }
        }

        let testOne = {}
        Object.getOwnPropertyDescriptor( testOne , { objectForDEscriptor } )

        testOne.name = 'TEEEE'

        // async Functions with Promises

        function doSomething () {
            return new Promise( resolve => setTimeout( () =>  resolve( 'i did Something', 3000 ) ) )
        }

        async function watchingSomethingDoSomething () {
            console.log( await doSomething() + ' and i Watchet')
        }

        // console.log('Before')
        // watchingSomethingDoSomething()
        // console.log('after')


        /// chained Async functions

            function iDidSomething () {
                return new Promise( resolve => {
                    return setTimeout( resolve('I did Something', 10000))
                })
            }

            async function iWatchedSomethingDidsomething() {
                return await iDidSomething() + ' yes and I watched'
            }

            async function IWatcheedSomethingWatchedSomethingDidSomething(){
                return await iWatchedSomethingDidsomething() + ' Yes and i Saw the guy '
            }

            function IWatchedTheTwoGuys(){
                IWatcheedSomethingWatchedSomethingDidSomething().then( res => {
                    console.log( res )
                })
            }

            // IWatchedTheTwoGuys()

            // rest properties array and object
                let propertyOne = [1, 2 , 3 , 4]
                    const {first, second, ...others } = propertyOne
                    //console.log(others)

                    const sumafourNumbers = (a,b,c,d) => a + b + c + d

                    // console.log(sumafourNumbers( ...propertyOne ))
                //objects

                let properObject = {
                    oneP: 1,
                    twoP: 2,
                    threeP: 3,
                    fourP: 4
                }, properObjectTwo = {
                    fiveP: 5,
                    sixP: 6,
                    sevenP: 7,
                    ...properObject

                }
                const { oneP, twoP , ...othersForproper } = properObject

                //console.log(properObjectTwo)

                //async for llooop
                    const watiignSome = () => {
                        return new Promise( resolve => {
                            resolve( [1,2,3], 3333 )
                        })
                    }
                    const waitingNumbers = async () => {
                        let wa = await watiignSome()
                        for await (let a of wa){
                            // console.log(a)
                        }
                    }
                    waitingNumbers()

                    // fetch('./data.json')
                    //     .then( data => data.json())
                    //     .then( data => console.log(data))
                    //     .catch( error => console.log(error) )
                    //     .finally( () => { console.log('jijiji')})
            // regular expresions
            /**
             * Lookahead ?= and ?!
             * look Behind ?<= and ?<!
             * \p{}u
             * \P{} negativeu
             * \p{ASCII}u
             * \p{ASCII_Hex_Digit}u
             * \p{Uppercase}u
             * \p{Lowecase}u
             * \p{Script=Latin} u
             */

             let reg = /^(?<year>\d{4}).(?<month>\d{2}).(?<days>\d{2})$/
                 groups = reg.exec( '2020-09-24' )
                 //console.log(groups.groups)
            let reg2 = /^hello.hello$/s
                    // is true with \n and the s flag 
                    // is false with \n without s flag 
                    //console.log( reg2.test('hello\nhello') )

            //style guides
            /**
             *
             * identation use spaces instead of tabs
             * dont use semicolons
             * try to cut lines at 80 characters
             * no death code just use the code you need 
                * notes and version controls is for that
             * Comments when is useful
             * Variable declaration use let never use var and
             * const use with uppercase and _ HELLO_WORLD
             * Functions use arrow function unless you need the this 
             * Names functions and variables start with lowercase use camelcase
             * classes and constructor function start with capitalized 
             * whitespaces use whitespace to read better the code use after 
             * a math operation or && after and before ()
             * use single quotes instead of double quotes because double quotes 
             * is and standar in html5 use  template literals
             * 
             */

            /**
             * literals could be strings, booleans , numbers, arrays, and object 
             * because is the code that we have written on the vscode
             * identifier are some text where we can asign our literals $ or _ but $ is for DOM
             * reserved names 
            */
           // variables var, let and const scope is a portion of the code where the variable is visible

           let h = 'H'
           const HELLO = 'hello'
        //    console.log( h, HELLO )
           const thisIsaFunction = () => {
               let h = 'ookokoko'
               const HELLO = 'jijijiji'
            // console.log( h, HELLO )
           }
           thisIsaFunction()
           

           //primitive types
           /**
            * Number intergel and float
            * intergel 11254
            * float 1.254
            * Booleans
            * true and false
            * string
            */
           //string
           const someTextFunction = () => 'this is a text'
            // console.log( 'Hug Me Brother!' + 'Drake' + 'You\'re Amazing' )
            // console.log(`Hug me Brother! Drake You're Amazing ${someTextFunction()}`)

            if( 0 && -0 && NaN && null && undefined && ''){
                console.log('Is false')
            }else{
                // console.log('Other things are true')
            }

            //expresions
            //Math expresions
            let b = 10
            // console.log(b -= 2)
            //string expresions
            let ar = { broo: 'nothing'}
            // console.log(ar['broo'])
            // console.log(ar.broo)

            const car = new Object()
            const list = new Array()
            console.log( car.__proto__ === Object.prototype )
            console.log( list.__proto__ == Array.prototype )

            try{                
                let d = document.querySelector( '.d' ).remove()
                        console.log( d )
            }catch(e){}finally{
                // console.log( 'final' )
            }

            /// some known rules for semicolons

            // let w = ''
            // let z = ''
            // let ye = 'a'
            // [1,2,3].forEach( item => {
            //     console.log(item)
            // })

            // let bbb = 'd'
            // ( 1, 3 ).toString()

            // let a = (() => {
            //     return 
            //     'ji'
            // })()
            // let a = (() => { 
            //     return { 
            //         re: 'k'
            //     }
            // })() 
            // console.log(a)

            // 2 + 1
            // -1 + 1 === 0 ? console.log('0') : console.log('2')
            
            //functions

            //regular functions

            function doSomething(){
                console.log('doing something')
            }
            //doSomething()

            //named function expresion

            const dosomething = function(){
                console.log('do it something else')
            }

            // dosomething()

            //named function expression

            const doSomethingElse = function doSomethingElse(){
                console.log('Do it Something Esle c:')
            }
            // doSomethingElse()

            //arrow functions

            const arrowFunctionCheck = () => {}
            const arrowFunctionCheck1 = one => console.log('checking 1')
            const arrowFunctionCheck2 = ( one, two ) => {}
            const arrowCheck3 = ( one = 1, two = 2 ) => console.log( one, two )
            const arrowCheck4withObjectDestructuring = ( { one = 1, two = 2 } ) => console.log( one, two )
            let usingArrayArrow = [ 3, 4 ],
                usingObject = { one : 6, two : 9 }

            // arrowFunctionCheck1()
            // arrowCheck3()
            // arrowCheck3( ...usingArrayArrow ) with array
            // arrowCheck4withObjectDestructuring( usingObject  )

            //nested functions

            const insideTherisaFunction = () => {
                const imAnother = () => {
                    return 'inside'
                }
                console.log( imAnother() )
            }

            // insideTherisaFunction()

            //AIIF

            // ;(autoInvokeOne = () => {
            //     console.log('auto one')
            // })()

            // ;(function(){
            //     console.log('auto two')
            // }())

            // let auto = (() => {
            //     return 'auto invoke 3'
            // })()
            // console.log(auto)

            // let auto2 = (function(){
            //     return 'auto invoke 4'
            // }())
            // console.log(auto2)

            // this regular function vs this arrow funciton

            const functionObject = {
                videogameName: 'Super Mario World' ,
                console : 'Supernintendo',
                all : function(){
                    console.log(this)
                    return `${this.videogameName} and Console ${this.console}`
                },
                all2 : () => {
                    console.log(this)
                    return `${this.videogameName} ${this.console}`
                }
            }

            // console.log( functionObject.all() )
            // console.log( functionObject.all2() )

            //hoisting
            /**
             * JavaScript puts all the function on top and after that 
             * they call it that is why is legal to do 
             */
            //not works
            // onTopOfThat()
             const onTopOfThat = () => {
                console.log('on top')
             }
             //yes works
            //  onTopOfthat2()
             function onTopOfthat2() {
                console.log('On top 2')
             }

             const returningArray = () => {
                 return [ 10 , 20]
             }

             const returnObject = () => {
                 return { twenty : 20, thirty: 30 }
             }

             const [ oneR , twoR  ] = returningArray()
            //  console.log( returningArray() )
            //  console.log( oneR, twoR)
             const { twenty, thirty } = returnObject()

            //  console.log(twenty , thirty)

            //arrays
            const arrayExampleOne = []
            //iterate
            let arrayExampleTwo = [ 1, 2, 3, 4 ]
            let newArrayTwo = arrayExampleTwo.map( ( item ,index ) => item)
            let newArrayTwoFilter = arrayExampleTwo
                .filter( ( item, index ) => item === 4)
            let newArrayTworeduce = arrayExampleTwo
                .reduce( (accu, item, index) => { return accu * item} , 1 )
            ;arrayExampleTwo.forEach( item => {
                // console.log(item)
            })
             for( example of arrayExampleTwo ){
                //  console.log(example)
             }
             for(let a = 0; a < arrayExampleTwo.length; a++){
                //  console.log(a)
             }
             // iterator
             let it = arrayExampleTwo[Symbol.iterator]()
            //  console.log( it.next().value )
            //  console.log( it.next().value )

             let usingEntries = arrayExampleTwo.entries()
             let usingKeys = arrayExampleTwo.keys()

            //  console.log(usingEntries.next().value)
            //  console.log( usingKeys.next().value )

             // add to an array 
             let adding = [ 'Adding', 'anything' ]
            //  console.log( adding )
             // at the final
                // adding.push('one')
            //  console.log( adding )
             // at the beguinning
                // adding.unshift('hahaha')
            //  console.log( adding )
             // removing from an array
             // final
             adding.pop()
            //  console.log( adding )
             //beguinning
             adding.shift()
            //  console.log( adding )
             // at random position
                // adding.splice(0, 1)
            //  console.log( adding )
             // remove and insert
                // adding.splice( 1, 0 , 'a', '5' )
                // console.log( adding )
            // joining arrays 

            let joinA = [1, 2],
                joinB = [3, 4]
                // console.log( joinA.concat( joinB ) )
            //look up for a particular thing
             let lookUp = [ 0 ,1 , 2, 3, 4, 5 ]

            //  console.log( lookUp.indexOf( 2 ) )
            //  console.log( lookUp.lastIndexOf( 5 ) )
            //  console.log( lookUp.find( item => item === 4 ) )
            //  console.log( lookUp.findIndex( item => item === 5 ) )
            //  console.log( lookUp.includes( 3 ) )
            //  console.log( lookUp.includes( 3, 1) )
             //
            //  console.log( lookUp.slice( 0, 3 ) )
             // sort array 
             let arr = [ 1 ,0 ,2 ,3 ,11 , 12, 45 ]
             //ACSI
            //  console.log( arr.sort() )
            //     console.log(arr.reverse())
            //  // 
            //  console.log( arr.sort( (a, b) => a - b) )
            //     console.log(arr.reverse())

            //array to string 
            // console.log( arr.toString() )
            // console.log( ...arr)
            // console.log( arr.join(', ') )
            // console.log( arr.join('') )
            // console.log( arr.join(' ') )

            // loops
            // for forEach
            let forArray = [ 'this ', 'this ' ,'this']
            // for can break and continue
            //  for( let a = 0; a < forArray.length; a++){
            //     console.log( forArray[a] )
            //  }
            //  forArray.forEach( ( item, index ) => {
            //      console.log( item )
            //  } )
            // while do while
            let forWhile = 0
            //can break and continue
            //  while ( forWhile < forArray.length ) {
            //     //  console.log( forArray[forWhile], forWhile)
            //     forWhile++
            //  }
            //  do{
            //      console.log( forArray[ forWhile ] )
            //      forWhile++
            //  }while( forWhile <= forArray.length )
            // for of for in
             // can break and can continue
             let objectForIn = {
                 name: 'D45F0',
                 age: 30512,
                 timeOn : '15 hours',
                 needRepair: false,
                 needCheck: true
             }
            for( arr of forArray ){
                // console.log(arr)
            }
            // with entries
            for( [ index, value ] of forArray.entries( ) ){
                // console.log( index , value)
            }
            for( const objectProperties in objectForIn){
                // console.log( `${objectProperties} ${objectForIn[ objectProperties ]}` )
            }
            // for of is for property value and for in property names

            // Events
                // event the inline event ( old version )
                function buttonClick (){
                    // console.log('click with the old version') 
                }

                const xhr = new XMLHttpRequest()
                // console.log(xhr)
                //Onloead
                window.onload = () => {
                    // console.log(' window event load')
                }

                // document.querySelector( '#button' ).addEventListener( 'click', 
                // () => {
                //     console.log( 'button' )
                // } )
                // bubblig

                let container = document.querySelector(' .container '),
                    button = document.querySelector( '#button' ) 

                    container.style.cssText = ` 
                    width: 150px;
                    background: #f2f2f2;
                    height: 200vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    `
                container.addEventListener( 'click', 
                () => {
                    console.log( 'click container' )
                },false)
                button.addEventListener( 'click', 
                e => {
                    console.log('click button')
                    e.stopPropagation()
                })

                // event 

                document.querySelector( '#button' ).addEventListener( 'click', 
                event => {
                    // console.log( event )
                    // console.log( event.target )
                })

                window.addEventListener('mousedown', 
                e => {
                    // console.log(e.button)
                    // left 0 right 2
                })

                window.addEventListener( 'keydown', 
                e => {
                    // console.log(e.key)
                } )

                // most common events
                // load
                //mouse mousedown mousemove mouseup click dbclick
                //keyboard keyup keydown
                // scroll scroll
                window.addEventListener( 'click', 
                e => {
                    // console.log('click')
                })
                window.addEventListener( 'dblclick', 
                e => {
                    // console.log('dbclick')
                })
                window.addEventListener( 'keydown', 
                e => {
                    // console.log(e.key)
                })
                window.addEventListener( 'keyup', 
                e => {
                    // console.log(e.key)
                })
                // window.addEventListener( 'scroll', 
                // e => {
                    // console.log(window.scrollY)
                // })
                //throttling
                
                let cached = null
                window.addEventListener( 'scroll', 
                e => {
                    if( !cached ){
                            setTimeout( () => {
                                console.log( window.scrollY )
                                cached = null
                            }, 100)
                        }
                        cached = e
                    })
            // event loop
            // const bar = () => console.log('bar')
            // const baz = () => console.log('baz')
            // const foo = () => {
            //     console.log('foo')
            //     bar()
            //     baz()
            // }
            // foo()
            // queue
            // const bar = () => console.log('bar')
            // const baz = () => console.log('baz')
            // const foo = () => {
            //     console.log('foo')
            //     setTimeout( bar, 0)
            //     baz()
            // }
            // foo()
            //job
            // const bar = () => console.log('bar')
            // const baz = () => console.log('baz')
            // const foo = () => {
            //     console.log('foo')
            //     setTimeout( bar, 0)
            //     new Promise( ( resolve, reject ) => 
            //         resolve(' this be after bar and before baz ')
            //     )
            //     .then( r => 
            //         console.log(r)
            //     )
            //     baz()
            // }
            // foo()
            // synchronous y asynchronous y callback

            
            const doSomething2 = () => {
                const r = new Promise( (resolve, reject) => {
                    setTimeout(() => {
                        resolve('Cool')
                    },100)
                } )
                return r
            }

            const waitForSomething2 = async () => {
                const r =  await doSomething2()
                return r
            }

            // waitForSomething2().then( i => console.log( i ) )

            //chained asyn functions

            const iWatchedSo = () => {
                return new Promise( res => setTimeout( () => { return res('jijiji')}, 3000) )
            }

            const iSaw = async () => {
                return await iWatchedSo() + `i Saw`
            }

            const iSawAGuy = async () => {
                return await iSaw() + ` I saw the guy saw`
            }

            const iSayWhat = () => {
                return iSawAGuy()
            }

            // iSayWhat().then( i => console.log( i ))

            // creating promise

            let isDone = false

            // const prm = new Promise( (resol , reject) => {
            //     if(isDone){
            //         resol( 'You know that is a great Day')
            //     }
            //     if(!isDone){
            //         reject( 'Well i did Somwthing wring body' )
            //     }
            // })

            // prm.then( data => console.log( data ) )

            // consumed promised

            // const prom2 = new Promise( )

            // const isDoneYet = () => {
            //     prom2
            //     .then( ok => console.log( ok ))
            //     .catch( err => console.error( err ) )
            // }

            //chanied promises

            const status = response => {
                console.log(response)
                if( response.status >= 200 && response.status <= 300){
                    return Promise.resolve( response )
                }

                return Promise.reject( new Error( response.statusText ) )
            }

            const json = resp => {
                console.log( resp.json() )
                return resp.json()
            }

            // fetch( './data.json' , {
            //     method: 'GET'
            // })
            // .then( status )
            // .then( json )
            // .then( data => console.log( data ) )
            // .catch( err => console.log( err ) )

            // cascading
            // const pm1 = new Promise( ( rse , rej ) => {
            //     setTimeout( () => rse('resole') )
            // }).then( a => console.log(a))
            // .catch( err => console.log( err ) )
            // .catch( err => console.log( err ) )

            // new Promise( ( res, rej )  => {
            //     throw new Error( ' Error' )
            // }).catch( (err) => {throw new Error('New')} )
            // .catch( err => console.log(err))

            //orchestating 

            const f1 = fetch('./data.json')
            const f2 = fetch('./data.json')

            // Promise.all( [f1, f2] ).then( data => {
            //     console.log(data)
            // })

            // Promise.all( [f1, f2] ).then( ([f1, f2]) => {
            //     console.log( f2 )
            // } )

            //promise race

            // const onePm = new Promise( ( res, rej ) => {
            //     return setTimeout( res, 500, 'first')
            // } )

            // const secPm = new Promise( ( res, rej )  => {
            //     return setTimeout( res, 500, 'second')
            // })

            // Promise.race( [onePm, secPm] )
            // .then( object  =>  console.log(object) )


            // async await
            /**
             * The solution for callback hell
             * 2015 promises 2017 async await functions
             * are the use of generators
             */

            const doSomethingAsync = () => {
                return new Promise( resolve => {
                    setTimeout(() => {
                        resolve('I did Something Async and Await after 3 seconds')
                    }, 3000)
                })
            }

            const getTheAsyncDofunction = async () => {
                console.log( await doSomethingAsync())
            }
            // console.log('Before')
            // getTheAsyncDofunction()
            // console.log('After')
            
            //async await
            /**
             * Async await are really interesting 
             * the prepend async into functions 
             * return a promise
             */

            const asyncWithoutPRomise = async () => {
                return 'I have async but im not a promise'
            }
            // console.log( alert )
            // asyncWithoutPRomise().then( alert )

            const asyncFunctionWithPromise = async () => {
                return Promise.resolve('Yeah! im a promise!')
            }
            // asyncFunctionWithPromise().then( alert )

            // its very readable

            const withPromises = async  () => {
                return new Promise( resolve => {
                    resolve(fetch('./user.json'))
                })
                .then( data => data.json() )
                .then( user => fetch(`./${user.user1.name}.json`) )
                .then( age => age.json() )
                .then( first => first.Rodrigo.age )
            }
            // withPromises().then( data => console.log(data) )

            const withAsyncAwait = async () => {
                const user          = await fetch( './user.json' )
                const nameUserJson  = await user.json()
                const userName      = await nameUserJson.user1.name
                const fetchUser     = await fetch( `./${userName}.json` )
                const ageUserJson   = await fetchUser.json()
                const ageUser       = await ageUserJson.Rodrigo.age
                return ageUser
            }
            // withAsyncAwait( ).then( user => console.log( user ) )
            // multiple Async functions in Series

            const iDidSomethingAsync = () => {
                return new Promise( resolve => {
                    setTimeout( () =>{ 
                        resolve(
                            'I did Something Async'
                        )
                    }, 3000)
                })
            }

            const iWasWatchingSomeoneDoingSomething = async () => {
                return await  iDidSomething() +` hi and me watching`
            }

            const iSawSomeoneWatchingSomeone = async () => {
                return await  iWasWatchingSomeoneDoingSomething() + ` and I'm another One`
            }

            const iJustPassOut = async () => {
                return await iSawSomeoneWatchingSomeone()
            }
            // iJustPassOut().then( data => console.log( data ))

            // weird things with JavaScript 

            // const operations = []
            // for( var i = 0; i < 5; i++){
            //     operations.push( () => {
            //         console.log(i)
            //     })
            // }

            // for( operation of operations ){
            //     operation()
            // }

            // solve
            // const operations = []
            // for( let i = 0; i < 5; i++){
            //     operations.push( () => {
            //         console.log(i)
            //     })
            // }

            // for( operation of operations ){
            //     operation()
            // }
            
            // const operations = []
            // for( var i = 0; i < 5; i++){
            //     operations.push( ((j) => {
            //         return () => console.log(j)
            //     })(i) )
            // }

            // for( operation of operations ){
            //     operation()
            // }

            // setTimeout()

            // setTimeout(() => {
                // console.log('Do something after two sec')
            // },2000)
            // setTimeout(() => {
                // document.write('Do something after 5 sec')
            // },5000)

            //it receives a functions and his parameters

            // const myFunctionDelay = ( ( firstParameter, secParameter ) => {
            //     console.log( 'after 2 sec', firstParameter, secParameter )
            // })

            // setTimeout( myFunctionDelay, 2000 , 'bitcoin', ' two Sec')

            // const id = setTimeout( () => {
            //     console.log('change mind')
            // }, 3000)
            // clearTimeout(id)

            // using 0 executes ASAP

            // setTimeout( () => {
                // console.log('after')
            // }, 0)
            // console.log('before')

                // setInterval( () => {
                //     //run every 2 sec
                // }, 2000)
        // let idInterval = setInterval(() => {
        //     if( something === 'huhu' ){
        //         clearInterval( idInterval )
        //     }
        //     else{
        //         // do other things
        //     }
        // }, 2000)
        
        // to avoid the setTimeout proble of recursive


        // this 

        // this in stric Mode 
        /**
         * outside the object is undefined or window browser this
         * it doesnt work in arrow functions
         */

         // bind
         const car2 = {
             maker  : 'Ford',
             model  : 'Fiesta',
             drive(){
                return `I'm Driving a ${this.maker} ${this.model}`
             }
         }

        //  console.log(car2.drive())
        
        const car3 = {
            maker: 'Toyota',
            model: 'Fieta'
        }

        const drive = function(){
            return `I'm Driving a ${this.maker} ${this.model}`
        }.bind( car3 )

        // console.log( drive() )

        const car4 = {
            maker: 'Ford',
            model: 'Fiesta',
            drive: function(){
                return `I'm Driving a ${this.maker} ${this.model}`
            }
        }
        const car5 = {
            maker: 'Toyota',
            model: 'Sienna'
        }
        // console.log( car4.drive.bind( car5 )() )

        // call() and apply()

        const car6 = {
            maker: 'Ford',
            model: 'Fiesta'
        }

        const drive2 = function( klh ){

            return `I'm driving with a ${this.maker} ${this.model} ${klh}`
        }

        // console.log( drive2.call( car6, '100' ))
        // console.log( drive2.apply( car6, ['100'] ))

        // this brower event

        let someButton = document.querySelector('#button')
            someButton.addEventListener( 'click', function(){
                console.log(this)
            }.bind(this)
            )
        
         // stric mode 

            /**
             * to enabled stric mode you need 'use strict' on top 
             * of the document or inside or a function
             */

            // 'use strict'
            // const stricMode = (a,a,b) => {
            //     'use strict'
            //     console.log( a,a,b)
            // }
            // (() => {
            //     stricMode()
            // })()

            // variables

            // ;(() =>{
            //     'use strict'
            //     hey = 'hey'
            //     console.log(hey )
            // })() 
            // ;(function(){
            //     'use strict'
            //     you = 'you'
            //     console.log( you)
            // }())

            // define a property object not writable
            // ;(() => {
            //     'use strict'
            //     const car = {}
            //     Object.defineProperty( car, 'color', { toy: 'maz steel'})
            //     car.color = 'blue'
            // })()

            //getters
            const cars = {
                get color(){
                    return 'blue'
                }
            }

            cars.color = 'red'
            ;(()=> {
                // 'use strict'
                cars.color = 'white'
            })()

            const littleCar = { small: 12 }
            Object.preventExtensions(littleCar)
            littleCar.color = 'red'
            ;(() => {
                // 'use strict'
                littleCar.date = new Date(2020)
                // console.log(littleCar)
            })()
            
            // ;(()=> {
            //     // 'use strict'
            //     // true.false = ''
            //     var test = 'test'
            //     test.testing = 'true'
            //     test.testing
            // })()

            ;(() => {
                'use strict'
                const reloj = {
                    tik : '1',
                    tok : '5'
                }
                // delete Object.prototype   
                console.log(reloj.tik)
            })()

            ;(() => {
                console.log(010)
            })()
            ;(() => {
                'use strict'
                // console.log(010)
                console.log(0o10)
            })()
