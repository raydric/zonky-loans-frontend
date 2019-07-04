import React, {Fragment, useState} from 'react';

import Ratings from './Ratings';
import axios from '../utils/Api'
import Paragraph from './Paragraph';
import {useTranslation} from 'react-i18next';

const Calculator = () => {
    const [result, setResult] = useState();

    const calculate = (rating) => async () => {
        const {data} = await axios.get('/loans/marketplace', {
            params: {
                'nonReservedRemainingInvestment__gt': 0,
                'fields': 'amount',
                'rating__eq': rating.rating
            }
        });

        if (data.length === 0) {
            return setResult(0);
        }

        let total = 0;

        data.forEach((data) => {
            total += data.amount;
        });

        const result = total / data.length;
        setResult(result.toFixed(2));
    };

    const {t} = useTranslation();

    return (
        <Fragment>
            <Paragraph size="1.5rem">{t('interestedRate')}</Paragraph>
            <Ratings calculate={calculate}/>

            {result ?
                <Fragment>
                    <Paragraph size="1.5rem" padding="2rem 0 0 0">{t('avgActiveLoans')}</Paragraph>
                    <Paragraph size="2rem">{result} Kč</Paragraph>
                </Fragment> : ''
            }
        </Fragment>
    );
};

export default Calculator;
