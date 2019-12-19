export let masterJson = {
    type: 'tabbed',
    tabs: ['home'],
    pages:
        [
            {
                type: 'tabbed',
                tabs: ['Your Home', 'Home Consruction', 'Home Protection'],
                pages:
                    [

                        {
                            title: 'Your Home',
                            desc: 'Tell us about your home',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'Home Type',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: ['Primary', 'Secondary'],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Year Purchased',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_years_type()',
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
                                        title: 'Do you own and live in the property',
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

                                    },
                                    {
                                        title: 'Are you original owner?',
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

                                    }]
                                },
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'How far is the property for the coast?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: '',
                                            data: [],
                                            value: true,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Is this property part of barrier island?',
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

                                        }
                                    ]

                                },
                                {
                                    type: 'row-12',
                                    elements: [{
                                      // tslint:disable-next-line:max-line-length
                                        title: 'Is your home rented to someone for more than 4 weeks a year, not included permanent roommates or boarders?',
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
                                },
                                {
                                    type: 'row-12',
                                    elements: [
                                        {
                                            title: 'Have you lived at 3 HENRY CLAY CT, SAVANNAH, GA for less than 3 years?',
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

                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Occupants',
                            desc: 'Please tell us who lives in your home with you, inluding childeren',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'Number of families?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: ['Primary', 'Secondary'],
                                            value: 0,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Number of Occupants',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_years_type()',
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
                                        title: 'Is there a smoker residing in your household?',
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

                                    }]
                                }
                            ]
                        },
                        {
                            title: 'Pets & Animals',
                            desc: '',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-6',
                                    elements: [
                                        {
                                            title: 'Number of dogs?',
                                            desc: '',
                                            type: 'dropdown',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: ['Primary', 'Secondary'],
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
                                    elements: [{
                                        title: 'Are there any pets with bite history or any exotic, undomesticated or vicious animals on the premises?',
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

                                    }]
                                }
                            ]
                        },
                        {
                            title: 'Pool & Trampoline',
                            desc: '',
                            type: 'section',
                            info: '',
                            class: '',
                            elements: [
                                {
                                    type: 'row-12',
                                    elements: [
                                        {
                                            title: 'Is there any trampoline at your home?',
                                            desc: '',
                                            type: 'toggle',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: [],
                                            value: true,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Is the trampoline enclosed with a fence, locked gate, and surrounding net?',
                                            desc: '',
                                            type: 'toggle',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: [],
                                            value: true,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Is there a pool or hot tub?',
                                            desc: '',
                                            type: 'toggle',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: [],
                                            value: true,
                                            info: '',
                                            class: '',
                                            validation: '',
                                            hidden: false

                                        },
                                        {
                                            title: 'Does it include a:',
                                            desc: '',
                                            type: 'checkbox',
                                            event_func: '',
                                            post_func: 'populate_home_type()',
                                            data: ['Pool Slide', 'Diving Board', 'Attached Pool Enclosed'],
                                            value: [true, true, true],
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
                                    title: 'Home construction',
                                    desc: '',
                                    type: 'button',
                                    event_func: 'home_construction_func()',
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
