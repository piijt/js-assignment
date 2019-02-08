var languages = [];     // languages is an indexed array, Key10a page 14
                        // each array element is an object, Key10a page 16
languages[0] = { countrycode: 'AFG'
    , language: 'Balochi', percentage: '0.9', population: '22720000' };
languages[1] = { countrycode: 'AFG'
    , language: 'Dari', percentage: '32.1', population: '22720000' };
languages[2] = { countrycode: 'AFG'
    , language: 'Pashto', percentage: '52.4', population: '22720000' };
languages[3] = { countrycode: 'AFG'
    , language: 'Turkmenian', percentage: '1.9', population: '22720000' };
languages[4] = { countrycode: 'AFG'
    , language: 'Uzbek', percentage: '8.8', population: '22720000' };
languages[5] = { countrycode: 'TJK'
    , language: 'Russian', percentage: '9.7', population: '6188000' };
languages[6] = { countrycode: 'TJK'
    , language: 'Tadzhik', percentage: '62.2', population: '6188000' };
languages[7] = { countrycode: 'TJK'
    , language: 'Uzbek', percentage: '23.2', population: '6188000' };
languages[8] = { countrycode: 'UZB'
    , language: 'Karakalpak', percentage: '2.0', population: '24318000' };
languages[9] = { countrycode: 'UZB'
    , language: 'Kazakh', percentage: '3.8', population: '24318000' };
languages[10] = { countrycode: 'UZB'
    , language: 'Russian', percentage: '10.9', population: '24318000' };
languages[11] = { countrycode: 'UZB'
    , language: 'Tadzhik', percentage: '4.4', population: '24318000' };
languages[12] = { countrycode: 'UZB'
    , language: 'Tatar', percentage: '1.8', population: '24318000' };
languages[13] = { countrycode: 'UZB'
    , language: 'Uzbek', percentage: '72.6', population: '24318000' };


    // alg = percentage % population * 100 = result (x % y * 100 = result)
    // languages[i].percentage.population (percentage / population) * 100; + "speaks this language"
    var i = 0;
    var result = (0.9 / 22720000) * 100;
    console.log(result + '% speaks Balochi in the country you see before you');
    window.alert(languages[i].countrycode + " " + languages[i].language + "(SEE THE CONSOLE LOG FOR PERCENTAGE THAT SPEAKS THE LANGUAGE!)");

    var i = 1;
    var result = (32.1 / 22720000) * 100;
    console.log(result + '% speaks Dari in the country you see before you');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 2;
    var result = (52.4 / 22720000) *100;
    console.log(result + '% speaks Pashto in the country you see before you');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 3;
    var result = (1.9 / 22720000) *100;
    console.log(result + '% speaks Turkmenian');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 4;
    var result = (8.8 / 22720000) *100;
    console.log(result + '% speaks Uzbek');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 5;
    var result = (9.7 / 6188000) *100;
    console.log(result + '% speaks Russian');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 6;
    var result = (62.2 / 6188000) * 100;
    console.log(result + '% speaks Tadzhik');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 7;
    var result = (23.2 / 6188000) *100;
    console.log(result + '% speaks Uzbek in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 8;
    var result = (2.0 / 24318000) *100;
    console.log(result + '% speaks Karakalpak in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 9;
    var result = (3.9 / 24318000) *100;
    console.log(result + '% speaks Kazakh in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 10;
    var result = (10.9 / 24318000)*100;
    console.log(result + '% speaks Russian in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 11;
    var result = (4.4 / 24318000)*100;
    console.log(result + '% speaks Tadzhik in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 12;
    var result = (1.8 / 24318000)*100;
    console.log(result + '% speaks Tatar in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var i = 13;
    var result = (72.6 / 24318000)*100;
    console.log(result + '% speaks Uzbek in this country');
    window.alert(languages[i].countrycode + " " + languages[i].language);

    var the_end = 'Congratsulations, you have made it to the end! Now tell me how do I actually do these calculations properly?! kind regards Peter';
    console.log(the_end);
    

    for(var index in languages) {
      document.write( index + " : " + languages[index] + "<br />");
    }
