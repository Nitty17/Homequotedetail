export let masterJson = {
    type: 'tabbed',
    tabs: ['Home Protection'],
    pages:
        [
            {
                type: 'tabbed',
                tabs: ['Your Home', 'Home Consruction', 'Home Protection'],
                pages:
                    [
                            
                        {
                            title: 'Your Home\'s protection',
                            desc: 'Tell us about the features that protect your home',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'Does the property have:',
                                            desc: '',
                                            type: 'checkbox',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: ['Storm Shutters', 'Secondary water resistant roof barrier', 'Deadbolts','Laminated Windows','Sprinkler System','Fire Extinguisher','Smoke Detectors'],
                                            value: [true, true, true,true, true, true,true],
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        }
                                    ]
                                },
                                {
                                    type: 'row-6',
                                    elements: [,
                                        {
                                            title: 'What type of Security Alarm does the property have?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_security_alaram_type()',
                                            data: [],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        }]
                                },
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'What type of water detection device does the property have?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_water_detection_type()',
                                            data: [],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        }
                                    ]

                                },
                                {
                                    type: 'row-6',
                                    elements: [{
                                        title: 'What type of Fire Alarm does the property have?',
                                        desc: '',
                                        type: 'dropdown',
                                        event_func: '',
                                        post_func: 'populate_fire_alarm_type()',
                                        data: [],
                                        value: 0,
                                        info: '',
                                        class: '',
                                        validation: '',
                                        hidden: false
                                    }]
                                }                                
                            ]
                        },
                        {
                            title: 'Protection Class',
                            desc: 'Protection class is based upon an extensive evaluation of an area’s water supply, delivery facilities and the local community or subscription fire department’s ability to respond in an emergency.',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'We found 1 fire departments in your area. Please select your corresponding fire department.',
                                            desc: '',
                                            type: 'checkbox',
                                            event_func: '',
                                            post_func: 'populate_fire_departments()',
                                            data: ['SouthSide FD'],
                                            value: [true],
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        }
                                    ]
                                },
                                {
                                    type: 'row-6',
                                    elements: [{
                                        title: 'How far is your home from the responding fire department?',
                                        desc: '',
                                        type: 'dropdown',
                                        event_func: '',
                                        post_func: 'populate_home_distance()',
                                        data: ['1', '2', '3', '5'],
                                        value: 0,
                                        info: '',
                                        class: '',
                                        validation: '',
                                        hidden: false

                                            }
                                            ]
                                },
                                {
                                    type: 'row-6',
                                    elements: [{
                                    title: 'Is your home within 1,000 feet of the nearest fire hydrant?',
                                    desc: '',
                                    type: 'toggle',
                                    event_func: '',
                                    post_func: '',
                                    data: [],
                                    value: true,
                                    info: '',
                                    class: '',
                                    validation: '',
                                    hidden: false

                                        }
                                    ]
                                }
                            ]
                        },        
                        {
                            type: 'footer',
                            elements: [
                                {
                                    title: 'Cancel',
                                    desc: '',
                                    type: 'button',
                                    event_func: 'cancel_func()',
                                    post_func: '',
                                    data: [],
                                    value: 0,
                                    info: '',
                                    class: 'cancel',
                                    validation: '',
                                    hidden: false

                                }, {
                                    title: 'Home Claims',
                                    desc: '',
                                    type: 'button',
                                    event_func: 'home_claims_func()',
                                    post_func: '',
                                    data: [],
                                    value: 0,
                                    info: '',
                                    class: 'submit',
                                    validation: '',
                                    hidden: false

                                }
                            ]
                        }
                    ]
            } 
        ]
};
