function change(amt) {
	var dollars = Math.floor(amt);
	var cents = Math.round(( amt - dollars ) * 100);
	var quarters =( cents - cents % 25)/25;
	cents = cents % 25;
	var dimes = ( cent - cents % 10) / 10;
	cents = cents % 10;
	var nickles = ( cents - cents % 5) / 5;
	cents = cents % 5;
	return {dollars: dollars,
			quarters: quarters,
			dimes: dimes,
			nickles: nickles,
			pennies: cents};
}
