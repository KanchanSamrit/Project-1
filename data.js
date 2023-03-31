const countries=[

    {countryName: 'Australia', capital: 'Canberra'},
    {countryName: 'Canada', capital: 'Ottawa'},
    {countryName: 'Egypt', capital: 'Cairo'},
    {countryName: 'India', capital: 'New Delhi'},
    {countryName: 'Norway', capital: 'Oslo'}
    
]

 export function getAllCountries(){

    //const countries = getAllcountries()
     return countries;

}

export function addCountry(country) {
    countries.push(country)
    
}