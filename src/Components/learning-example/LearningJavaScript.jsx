const person = {
    name: 'KB',
    address: {
        Line1: '123 Batman Str',
        city: 'Gotham',
        county: 'USA'
    },
    profiles: ['twitter', 'myspace', 'mxit'],
    printProfile : () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}


export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.Line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}