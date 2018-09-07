import React, {Component} from 'react';
import MenuView from './custmenuView';

export default class MenuList extends Component {
        state = {
                menumeals : [
                {
                    'mealName':'Fries',
                    'price':'UGX 5000'
                },
                {
                    'mealName':'Beef with Rice',
                    'price':'UGX 6500'
                },
                {
                    'mealName':'French beans and rice',
                    'price':'UGX 5500'
                },
                {
                    'mealName':'Beans and Chips',
                    'price':'UGX 3000'
                },
                {
                    'mealName':'Fish fingers',
                    'price':'UGX 10000'
                }
            ]
        }
    render () {
        let menumeals = this.state.menumeals
    let MenuViews = menumeals.map( (menumeal,index) => <MenuView key={index} menumeal = {menumeal}/>)
        return(
        <tbody>
            <tr>
					<th>Java's Menu</th>
					<th>Price</th>
			</tr>
            {MenuViews}
        </tbody>)
    }
}