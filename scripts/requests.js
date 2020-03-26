<<<<<<< HEAD
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleOld = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all', {})
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode).name
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getCountryOld = (countryCode) => {
    return fetch('//restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return myCountry = data.find((country) => country.alpha2Code === countryCode).name
    })
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=a6239e5f7b550c', {})
    if(response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocationOld = () => {
    return fetch('//ipinfo.io/json?token=a6239e5f7b550c', {}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    })
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
=======
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleOld = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all', {})
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode).name
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getCountryOld = (countryCode) => {
    return fetch('//restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return myCountry = data.find((country) => country.alpha2Code === countryCode).name
    })
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=a6239e5f7b550c', {})
    if(response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocationOld = () => {
    return fetch('//ipinfo.io/json?token=a6239e5f7b550c', {}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    })
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
>>>>>>> db7011314d7ae3107b2ebc6ada26a6c122b41072
}