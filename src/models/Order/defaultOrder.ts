import {IOrder, IOrderContext} from "./Order";

export const defaultOrder:IOrder = {
	id: "",
	email:"",
	firstName: "",
	lastName: "",
	country: "",
	stateProvince: "",
	city: "",
	addressline: "",
	addressline2: "",
	zipcode: "",
	phoneNumber: "",
	items: [],
	paymentMethod: "",
	totalPrice: 0,
	shipped: false,
	received: false,
	createdAt: new Date(),
}

export const defaultOrderContext:IOrderContext = {
	order: defaultOrder,
	setOrder: () => {},
	id: "",
	setId: () => {},
	email:"",
	setEmail:() => {},
	firstName: "",
	setFirstName: () => {},
	lastName: "",
	setLasttName: () => {},
	country: "",
	setCountry: () => {},
	stateProvince: "",
	setStateProvince: () => {},
	city: "",
	setCity: () => {},
	address1: "",
	setAddress1: () => {},
	address2: "",
	setAddress2: () => {},
	zipcode: "",
	setZipcode: () => {},
	items: [],
	paymentMethod: "",
	setPaymentMethod: () => {},
	totalPrice: 0,
	shippingCost: 0,
	shipped: false,
	received: false,
	createOrder: () => {}
}