//observer
let subscriptions = {
	//sadarja propertita za razlichni eventi
	'loginUser':[]
}

export default {
	events:{
		'loginUser':'loginUser'
	},
	subscribe:(eventName, func){
		subscriptions[eventName].push(func)
	},
	trigger:(eventName, data){
		subscriptions[eventName].forEach(func => func(data))
	}	
}

////Parent component
export default class Haader extends Component {
	constructor(){
		super()
		
		this.state ={
			username:null
		}
	}
	
	//observera slusha za userLoggedIn
	observer.subscribe(observer.events.loginUser, this.userLoggedIn)
}

//func e bind kam this zashtoto pochvame arro function
userLoggedIn =(username)=>{
	this.setState({username});
}
