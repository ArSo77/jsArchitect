import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);


let dynamicLangObject = {};

function importAll (resourcePath) {
    const getLangKeys = [];
    resourcePath.keys().forEach(key => getLangKeys.push(key.replace(/(\.\/|\.js$)/g, '').split('/')[0]))
    const getUniqueKeys = [...new Set(getLangKeys)]

    for (let i = 0; i < getUniqueKeys.length; i++) {
        dynamicLangObject[getUniqueKeys[i]] = {}
    }

    resourcePath.keys().forEach(key => {
        const path = key.replace(/(\.\/|\.js$)/g, '').split('/')

        if (path[0] in dynamicLangObject) {
            dynamicLangObject[path[0]][path[1]] = resourcePath(key).default
        }
    });
}

importAll(require.context('./lang', true, /\.js$/));

const messages = {
    pl: {
        ...dynamicLangObject.pl
    },
    en: {
        ...dynamicLangObject.en
    },
    tr: {
        ...dynamicLangObject.tr
    },
};




export default new VueI18n({
    locale: 'pl',
    messages,
});
