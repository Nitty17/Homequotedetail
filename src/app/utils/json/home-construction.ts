export let construction = {
    type: 'tabbed',
    tabs: ['Your Home'],
    pages:
        [
            {
                type: 'tabbed',
                tabs: ['Your Home', 'Home Consruction', 'Home Protection'],
                header: "We found some information about your home's construction. Please verify or update this infomation.",
                pages:
                    [

                        {
                            title: "Your Home's construction",
                            desc: "",
                            type: 'section',
                            info: '',
                            class: 'top-padding',
                            elements: [
                                {
                                    type: 'row-box',
                                    elements: [
                                        {
                                            title: '',
                                            desc: 'GENERAL CONSTRUCTION',
                                            type: 'box',
                                            event_func: '',
                                            post_func: '',
                                            data: [
                                                { title: "Year Built :", value: "1978" },
                                                { title: "Square Footage:", value: "2092 sq ft" },
                                                { title: "Number of Stories:", value: "1" },
                                                { title: "Foundation Type:", value: "Concrete Slab" },
                                                { title: "Finished Lowest Level:", value: "No" },
                                                { title: "Exterior Wall Finish:", value: "Brick Veener" },],
                                            value: 0,
                                            info: '',
                                            class: 'add-line',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: '',
                                            desc: 'ROOF, COOLING & HEATING',
                                            type: 'box',
                                            event_func: '',
                                            post_func: '',
                                            data: [{ title: "Roof Cover Type:", value: "Composition - Architectural" }, { title: "Fireplace:", value: "Yes" }],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        }
                                    ]
                                },
                                {
                                    type: 'row-12',
                                    elements: [
                                        {
                                            title: '',
                                            desc: 'Please provide the following additional information.',
                                            type: 'text',
                                            event_func: '',
                                            post_func: '',
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
                                        title: 'Number of units?',
                                        desc: '',
                                        type: 'dropdown',
                                        event_func: '',
                                        post_func: '',
                                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                                        value: 0,
                                        info: '',
                                        class: '',
                                        validation: '',
                                        hidden: false

                                    },
                                    {
                                        title: 'What is the home made of?',
                                        desc: '',
                                        type: 'dropdown',
                                        event_func: '',
                                        post_func: '',
                                        data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                                        value: 0,
                                        info: '',
                                        class: '',
                                        validation: '',
                                        hidden: false

                                    }]
                                },
                                {
                                    type: 'row-12',
                                    elements: [
                                        {
                                            title: 'Is your home certified as a fortified home for safer living?',
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
                            title: 'Roof, Cooling & Heating',
                            desc: '',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'What type of heating does your home have?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: '',
                                            data: ['Ordinary', 'Premium'],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Is the heating upgraded?',
                                            desc: '',
                                            type: 'toggle',
                                            event_func: '',
                                            post_func: '',
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
                                        title: 'Is the roof hail resistant?',
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

                                    }, {
                                        title: 'Has the roof been replaced/upgraded?',
                                        desc: '',
                                        type: 'toggle',
                                        event_func: '',
                                        post_func: '',
                                        data: [],
                                        value: false,
                                        info: '',
                                        class: '',
                                        validation: '',
                                        hidden: false

                                    }]
                                }
                            ]
                        },
                        {
                            type: 'footer',
                            elements: [
                                {
                                    title: 'Back',
                                    desc: '',
                                    type: 'button',
                                    event_func: 'back_func()',
                                    post_func: 'populate_home_type()',
                                    data: [],
                                    value: 0,
                                    info: '',
                                    class: 'back',
                                    validation: '',
                                    hidden: false

                                }, {
                                    title: 'Home Protection',
                                    desc: '',
                                    type: 'button',
                                    event_func: 'home_protection_func()',
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

}