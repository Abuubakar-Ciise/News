import React, { useState } from 'react';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };


    return (
        <div className="bg-gray-200 p-4 flex justify-between items-center">
            <p className="text-lg font-bold text-center">You can get news from all these Countries:</p>
            
            <select
                className="p-2 border border-gray-400 rounded"
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="at">Austrian German</option>
                <option value="au">Australian English</option>
                <option value="be">Belgian Dutch</option>
                <option value="bg">Bulgarian</option>
                <option value="br">Brazilian Portuguese</option>
                <option value="ca">Canadian English</option>
                <option value="ch">Swiss German</option>
                <option value="cn">Chinese</option>
                <option value="co">Colombian Spanish</option>
                <option value="cz">Czech</option>
                <option value="de">German</option>
                <option value="eg">Egyptian Arabic</option>
                <option value="fr">French</option>
                <option value="gb">British English</option>
                <option value="gr">Greek</option>
                <option value="hk">Hong Kong Chinese</option>
                <option value="hu">Hungarian</option>
                <option value="id">Indonesian</option>
                <option value="ie">Irish</option>
                <option value="il">Hebrew</option>
                <option value="in">Indian English</option>
                <option value="it">Italian</option>
                <option value="jp">Japanese</option>
                <option value="kr">Korean</option>
                <option value="lt">Lithuanian</option>
                <option value="lv">Latvian</option>
                <option value="ma">Moroccan Arabic</option>
                <option value="mx">Mexican Spanish</option>
                <option value="my">Malaysian</option>
                <option value="ng">Nigerian English</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegian</option>
                <option value="nz">New Zealand English</option>
                <option value="ph">Filipino</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="rs">Serbian</option>
                <option value="ru">Russian</option>
                <option value="sa">Saudi Arabic</option>
                <option value="se">Swedish</option>
                <option value="sg">Singapore English</option>
                <option value="sk">Slovak</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="tw">Taiwanese</option>
                <option value="ua">Ukrainian</option>
                <option value="us">American English</option>
                <option value="ve">Venezuelan Spanish</option>
                <option value="za">South African English</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
