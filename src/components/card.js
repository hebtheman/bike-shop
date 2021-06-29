import { useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
    Check as CheckIcon,
    NavigateNext as NavigateNextIcon
} from '@material-ui/icons'

import Stars from "./stars"
import Bike1 from "../images/product.png"

import '../App.css'

const [
    primary, secondary, white, grey_dark, grey_light
] = [
    '#518FE5', '#6DE3CC', '#FFFFFF', '#606872', '#C2C8D0'
] 

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
        backgroundColor: primary
    },
  }))

export default function ItemCard() {
    const classes = useStyles()

    const cardPadding = 20

    const ImagePill = ({ text }) => (
        <div
            style={{
                borderRadius: 5,
                borderColor: 'none',
                backgroundColor: secondary,
                color: white,
                fontSize: 16,
                fontWeight: 'bold',
                padding: '6px 10px' 
            }}
        >
            {text}
        </div>
    )

    const RenderImage = ({ item }) => (
        <div className="card-image">
            <div 
                style={{
                    backgroundImage: `url('${Bike1}')`,
                    height: 200,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            />
            <div 
                style={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    cursor: "pointer"
                }}
                onClick={() => console.log(`implement on click to 'list of best sellers`)}
            >
                <ImagePill 
                    text={'Best Seller'}
                />
            </div>

            <div style={{ 
                position: 'absolute',
                bottom: 10,
                left: 0,
                right: 0,
                margin: 'auto'
            }}>
                <ImageScroller />
            </div>
        </div>
    )

    const RenderDetails = ({
        name,
        year,
        type,
        price,
        stars,
        features
    }) => (
        <div style={{ padding: `0 ${cardPadding}px ${cardPadding}px`, position: 'relative' }}>
             <div 
                style={{
                    position: "absolute",
                    right: 10
                }}
            >  
                <h1 className="star-amount">{stars.toFixed(1)}</h1>
                <Stars count={stars} />
            </div>
            <h1 className="card-name">{name}</h1>
            <h3 className="card-type">{`${year} ${type}`}</h3>

            <div style={{ marginBottom: 60 }}>
                {features.map((feature, i) => (
                    <div style={{ marginBottom: 10 }}>
                        <div style={{ display: 'table-row' }} >
                            <div style={{ display: 'table-cell', position: 'relative'}}>
                                <div style={{ position: 'absolute', bottom: -8 }}>
                                    <CheckIcon style={{ fontSize: 30, color: grey_dark  }}/> 
                                </div>
                            </div>
                            <div style={{ display: 'table-cell', paddingLeft: 35, color: grey_dark  }}>
                                {feature}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ position: 'absolute', bottom: cardPadding, left: cardPadding }}>
                <div style={{ display: 'table-row'}} >
                    <div style={{ display: 'table-cell', verticalAlign: 'bottom' }}>
                        <p>From <span style={{ fontSize: 24, fontWeight: 'bold' }}>£{price}</span></p>
                    </div>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: cardPadding, right: cardPadding }}>
                <div style={{ display: 'table-row'}} >
                    <div style={{ display: 'table-cell', verticalAlign: 'bottom' }}>
                        <a href="/" style={{textDecoration: 'none', color: 'inherit' }}><p><span style={{ fontWeight: 'bolder', fontSize: 20 }}>Shop now</span></p></a>
                    </div>
                    <div style={{ display: 'table-cell', position: 'relative', width: 25 }}>
                        <div style={{ position: 'absolute', bottom: 8 }}>
                            <NavigateNextIcon style={{ fontSize: 30 }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const bikes = [
        {
            id: 1,
            name: 'Rally pro 2',
            year: 2021,
            type: 'Mountain Bike',
            price: 299,
            stars: 5,
            features: [
                'Mechanical disk brakes',
                'Finance Available',
                '5 year warranty'
            ]
        },
        {
            id: 2,
            name: 'Rally pro 2',
            year: 2021,
            type: 'Mountain Bike',
            price: 299,
            stars: 5,
            features: [
                'Mechanical disk brakes',
                'Finance Available',
                '5 year warranty'
            ]
        },
        {
            id: 3,
            name: 'Rally pro 2',
            year: 2021,
            type: 'Mountain Bike',
            price: 299,
            stars: 5,
            features: [
                'Mechanical disk brakes',
                'Finance Available',
                '5 year warranty'
            ]
        },
        {
            id: 4,
            name: 'Rally pro 2',
            year: 2021,
            type: 'Mountain Bike',
            price: 299,
            stars: 5,
            features: [
                'Mechanical disk brakes',
                'Finance Available',
                '5 year warranty'
            ]
        }
    ]

    return (
        <Grid container spacing={1}>
            {bikes.map((bike, i) => (
                <Grid item>
                    <Card className={classes.root} key={i}>
                        <RenderImage item={bike}/>
                        <RenderDetails {...bike} />
                    </Card>
                </Grid>
            ))}
        </Grid>     
    )
}

const ImageScroller = () => {
    const [active, setActive] = useState(0)
    return (
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                cursor: 'pointer'
            }}
        >
                {[1, 2, 3].map((_, i) => (
                    <li 
                    style={{
                        display: 'inline',
                    }}
                >
                    <div
                        style={{
                            display: 'inline-block',
                            borderRadius: '100%',
                            padding: 7,
                            margin: 3,
                            backgroundColor: active === i ? white : grey_light
                        }}
                        onClick={() => setActive(i)}
                    />
                </li>
            ))}
        </ul>
    )
}