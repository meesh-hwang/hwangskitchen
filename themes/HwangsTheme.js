
const themePalette ={
    grey:'#545454',
    yellow:'#F5C121',
    white: '#ffffff',
    darkyellow:'#b08500',
    lightgrey:'#a6a6a6',
    font1: 'Questrial_400Regular',
    font2: 'Sriracha_400Regular'
}

export const HwangsTheme2 = {
    Button: {
        buttonStyle: {
            raised: true,
            width: 40,
            padding: 10,
            border: 'none'
        },
        titleStyle: {
            color: themePalette.grey,
            fontSize: 30,
        },
        type: 'flat'
    },

    Text: {
        style:{
            fontFamily: 'Questrial_400Regular',
            color: themePalette.grey,
        },
        h1Style: {
            color: themePalette.grey,
            fontSize: 26, 
            fontFamily: 'Questrial_400Regular',
            lineHeight: 45, 
            textAlign: 'center'
        },
        h2Style: {
            color: themePalette.yellow,
            fontSize: 20,
            lineHeight:28,
            margin:10
        },
        
    }
    
};

export const HwangsTheme = {
    
    Button: {
        buttonStyle: {
            raised: true,
            borderRadius: 40,
            backgroundColor: 'white',
            width: 160,
            padding: 10,
            borderColor: themePalette.yellow
        },
        titleStyle: {
            color: themePalette.grey,
            fontFamily: 'Sriracha_400Regular',
            fontSize: 15,
            zIndex: 10,
            textTransform: 'uppercase',
        },
        disabledStyle:{
            backgroundColor:themePalette.lightgrey,
        },
        type: 'outline'
    },

    Text: {
        style:{
            fontFamily: 'Questrial_400Regular',
            color: themePalette.grey,
            lineHeight:18
        },
        h1Style: {
            color: themePalette.grey,
            fontSize: 26,
            fontFamily: 'Questrial_400Regular',
            lineHeight: 45,
            textAlign: 'right'
        },
        h2Style: {
            color: themePalette.yellow,
            fontSize: 20,
            margin:10
        },
        h3Style: {
            marginTop:10,
            fontSize: 25,
        },
        h4Style: {
            fontSize: 18,
            paddingTop: 5
        }
        
    },

};