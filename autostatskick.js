//CHANGE ONLY THESE LINES!!
//DO WHATEVER YOU WANT BUT YOU NEED TO KNOW HOW
var connection = {
    host: "",
    port: 1337,
    password: ""
}
var options = {
    kickForStatspadding: true, //Do you want to kick for statspadding? Write true if yes, write false if no
    statspaddingStats:
        {
            bestScore: 50000, //minimum bestScore to kick (bestScore from main profile page, non-map-related)
            killStreak: 180, //minimum killStreak to kick (killStreak from main profile page)
        },
    kickForWeaponStats: true, //Do you want to kick for WeaponStats? Write true if yes, write false if no
    kickForWeaponHSR: true, //Do you want to kick for HeadShotRatios? Write true if yes, write false if no (IMPORTANT - option kickForWeaponStats NEEDS to be true)
    kickForWeaponACC: true, //Do you want to kick for accuracy? Write true if yes, write false if no (IMPORTANT - option kickForWeaponStats NEEDS to be true)
    minimumKills: 50, //minimum kills to kick (guess that's obvious :D)
    weaponStatsHSR:
        {
            //AR
            '3001': 0.4, //M16A2
            '3095': 0.4, //M16A2+3

            '3005': 0.4, //G3A4

            '3007': 0.4, //AEK-971
            '3096': 0.4, //AEK-971+3

            '3011': 0.4, //SCAR-L
            '3093': 0.4, //SCAR-L+3

            '3046': 0.4, //STG77AUG
            '3094': 0.4, //STG77AUG+3

            '3062': 0.4, //M4A1
            '3097': 0.4, //M4A1+3

            '3067': 0.4, //AN94 Abakan
            '3097': 0.4, //AN94 Abakan+3

            '3071': 0.4, //416-Carabine
            '3099': 0.4, //416-Carabine+3

            '3075': 0.4, //XM8
            '3100': 0.4, //XM8+3

            '3110': 0.4, //AK47

            '3114': 0.4, //F2000

            '3120': 0.4, //FAMAS

            '3127': 0.4, //L85A2

            '3132': 0.4, //ACW-R

            '3133': 0.4, //A-91

            //LMG
            '3003': 0.4, //M249 SAW
            '3074': 0.4, //M249 SAW+3

            '3013': 0.4, //MG3

            '3014': 0.4, //PKM
            '3080': 0.4, //PKM+3

            '3015': 0.4, //M60
            '3079': 0.4, //M60+3

            '3048': 0.4, //MG36
            '3101': 0.4, //MG36+3

            '3063': 0.4, //M240B
            '3081': 0.4, //M240B+3

            '3068': 0.4, //QJY-88
            '3082': 0.4, //QJY-88+3

            '3072': 0.4, //FN Minimi Para
            '3083': 0.4, //FN Minimi Para+3

            '3076': 0.4, //XM8AR
            '3084': 0.4, //XM8AR+3

            '3113': 0.4, //RPK-74M

            '3116': 0.4, //M27-IAR

            '3121': 0.4, //QBB-95

            '3128': 0.4, //Pecheneg

            '3134': 0.4, //LSAT

            '3135': 0.4, //L86A2

            //SR

            //Bolt Action
            '3004': 0.95, //SV-98

            '3022': 0.95, //M95
            '3102': 0.95, //M95+3

            '3024': 0.95, //M24
            '3103': 0.95, //M24+3

            '3077': 0.95, //GOL
            '3109': 0.95, //GOL+3

            '3111': 0.95, //L96A1

            '3126': 0.95, //M82A3

            '3138': 0.95, //M98B

            '3139': 0.95, //JNG-90

            //Semi-Auto
            '3023': 0.65, //SVD
            '3104': 0.65, //SVD+3

            '3065': 0.65, //M14 EBR
            '3106': 0.65, //M14 EBR+3

            '3066': 0.65, //M110
            '3107': 0.65, //M110+3

            '3119': 0.65, //SKS

            //SVUA/VSS
            '3045': 0.4, //SVU-A
            '3105': 0.4, //SVU-A+3

            '3070': 0.4, //VSS Vintorez
            '3108': 0.4, //VSS Vintorez+3

            //SMG
            '3012': 0.4, //UMP-45
            '3085': 0.4, //UMP-45+3

            '3016': 0.4, //MP7
            '3086': 0.4, //MP7+3

            '3017': 0.4, //P90
            '3087': 0.4, //P90+3

            '3018': 0.4, //PP-2000

            '3047': 0.4, //MP5
            '3088': 0.4, //MP5+3

            '3064': 0.4, //UZI
            '3089': 0.4, //UZI+3

            '3069': 0.4, //AKS-74U
            '3090': 0.4, //AKS-74U+3

            '3073': 0.4, //9A-91
            '3091': 0.4, //9A-91+3

            '3078': 0.4, //XM8c
            '3092': 0.4, //XM8c+3

            '3112': 0.4, //PP19

            '3117': 0.4, //PDW-R

            '3222': 0.4, //AS-VAL

            '3129': 0.4, //G53

            '3136': 0.4, //MTAR

            '3137': 0.4, //M5K

            //Pistols
            '3006': 0.65, //M9

            '3019': 0.65, //M1911
            '3037': 0.65, //Veteran's M1911
            '3052': 0.65, //Elite's M1911

            '3020': 0.75, //MP412-REX

            '3021': 0.65, //MP443
            '3042': 0.65, //Veteran's MP443
            '3051': 0.65, //Elite's MP443

            '3043': 0.65, //P226

            '3115': 0.75, //Deagle50
            '3118': 0.75, //Steel Deagle50

            '3123': 0.8, //Scattergun
            '3124': 0.8, //Nosferatu
            '3125': 0.1, //Easy-Piece :)

            '3131': 0.5, //93r
        },
    weaponStatsACC:
        {
            //AR
            '3001': 0.5, //M16A2
            '3095': 0.5, //M16A2+3

            '3005': 0.5, //G3A4

            '3007': 0.5, //AEK-971
            '3096': 0.5, //AEK-971+3

            '3011': 0.5, //SCAR-L
            '3093': 0.5, //SCAR-L+3

            '3046': 0.5, //STG77AUG
            '3094': 0.5, //STG77AUG+3

            '3062': 0.5, //M4A1
            '3097': 0.5, //M4A1+3

            '3067': 0.5, //AN94 Abakan
            '3097': 0.5, //AN94 Abakan+3

            '3071': 0.5, //416-Carabine
            '3099': 0.5, //416-Carabine+3

            '3075': 0.5, //XM8
            '3100': 0.5, //XM8+3

            '3110': 0.5, //AK47

            '3114': 0.5, //F2000

            '3120': 0.5, //FAMAS

            '3127': 0.5, //L85A2

            '3132': 0.5, //ACW-R

            '3133': 0.5, //A-91

            //LMG
            '3003': 0.5, //M249 SAW
            '3074': 0.5, //M249 SAW+3

            '3013': 0.5, //MG3

            '3014': 0.5, //PKM
            '3080': 0.5, //PKM+3

            '3015': 0.5, //M60
            '3079': 0.5, //M60+3

            '3048': 0.5, //MG36
            '3101': 0.5, //MG36+3

            '3063': 0.5, //M240B
            '3081': 0.5, //M240B+3

            '3068': 0.5, //QJY-88
            '3082': 0.5, //QJY-88+3

            '3072': 0.5, //FN Minimi Para
            '3083': 0.5, //FN Minimi Para+3

            '3076': 0.5, //XM8AR
            '3084': 0.5, //XM8AR+3

            '3113': 0.5, //RPK-74M

            '3116': 0.5, //M27-IAR

            '3121': 0.5, //QBB-95

            '3128': 0.5, //Pecheneg

            '3134': 0.5, //LSAT

            '3135': 0.5, //L86A2

            //SR

            //Bolt Action
            '3004': 0.8, //SV-98

            '3022': 0.8, //M95
            '3102': 0.8, //M95+3

            '3024': 0.8, //M24
            '3103': 0.8, //M24+3

            '3077': 0.8, //GOL
            '3109': 0.8, //GOL+3

            '3111': 0.8, //L96A1

            '3126': 0.8, //M82A3

            '3138': 0.8, //M98B

            '3139': 0.8, //JNG-90

            //Semi-Auto
            '3023': 0.5, //SVD
            '3104': 0.5, //SVD+3

            '3065': 0.5, //M14 EBR
            '3106': 0.5, //M14 EBR+3

            '3066': 0.5, //M110
            '3107': 0.5, //M110+3

            '3119': 0.5, //SKS

            //SVUA/VSS
            '3045': 0.5, //SVU-A
            '3105': 0.5, //SVU-A+3

            '3070': 0.5, //VSS Vintorez
            '3108': 0.5, //VSS Vintorez+3

            //SMG
            '3012': 0.5, //UMP-45
            '3085': 0.5, //UMP-45+3

            '3016': 0.5, //MP7
            '3086': 0.5, //MP7+3

            '3017': 0.5, //P90
            '3087': 0.5, //P90+3

            '3018': 0.5, //PP-2000

            '3047': 0.5, //MP5
            '3088': 0.5, //MP5+3

            '3064': 0.5, //UZI
            '3089': 0.5, //UZI+3

            '3069': 0.5, //AKS-74U
            '3090': 0.5, //AKS-74U+3

            '3073': 0.5, //9A-91
            '3091': 0.5, //9A-91+3

            '3078': 0.5, //XM8c
            '3092': 0.5, //XM8c+3

            '3112': 0.5, //PP19

            '3117': 0.5, //PDW-R

            '3222': 0.5, //AS-VAL

            '3129': 0.5, //G53

            '3136': 0.5, //MTAR

            '3137': 0.5, //M5K

            //Pistols
            '3006': 0.5, //M9

            '3019': 0.5, //M1911
            '3037': 0.5, //Veteran's M1911
            '3052': 0.5, //Elite's M1911

            '3020': 0.6, //MP412-REX

            '3021': 0.5, //MP443
            '3042': 0.5, //Veteran's MP443
            '3051': 0.5, //Elite's MP443

            '3043': 0.5, //P226

            '3115': 0.6, //Deagle50
            '3118': 0.6, //Steel Deagle50

            '3123': 100, //Scattergun
            '3124': 100, //Nosferatu
            '3125': 100, //Easy-Piece :)

            '3131': 0.5, //93r
        },
}













































var p4f = require('nodep4frcon');
var http = require('http');
var diff = require('deep-diff').diff;

var rcon = new p4f.rcon(connection);

var oldPlayers = [];

function main() {
    rcon.getplayersids(function (newPlayers) {
        var differences = diff(oldPlayers, newPlayers);
        if (differences != null) {
            differences.forEach(function (onediff) {
                if (onediff['kind'] == 'A') {
                    if (onediff['item']['kind'] == 'N') {
                        console.log('[MAIN-LOGIC] Making get request for player: ' + onediff['item']['rhs']['playername']);

                        http.get('http://battlefield.play4free.com/en/profile/stats/' + onediff['item']['rhs']['nucleusid'] + '/' + onediff['item']['rhs']['profileid'] + '?g=[%22CoreStats%22,%22WeaponStats%22]', function (res) {
                            var dane = '';
                            res.on('data', function (chunk) {
                                dane += chunk;
                            });
                            res.on('end', function () {
                                console.log('[MAIN-CHECKER] Checking player: ' + onediff['item']['rhs']['playername']);

                                var kick = false,
                                    kick_reason = '';

                                if (options['kickForStatspadding']) {
                                    console.log('[MAIN-STATSPADDING] Checking statspadding for player: ' + onediff['item']['rhs']['playername']);
                                    var value = JSON.parse(dane);

                                    if (value['data']['CoreStats']['bestScore'] >= options['statspaddingStats']['bestScore']) {
                                        kick = true;
                                        kick_reason = 'Statspadding detected -> best score: ' + value['data']['CoreStats']['bestScore'];
                                    }
                                    if (value['data']['CoreStats']['killStreak'] >= options['statspaddingStats']['killStreak']) {
                                        kick = true;
                                        kick_reason = 'Statspadding detected -> kill streak: ' + value['data']['CoreStats']['bestScore'];
                                    }
                                }

                                if (options['kickForWeaponStats'] == true && kick == false) {
                                    console.log('[MAIN-WEAPONS] Checking weapons-stats for player: ' + onediff['item']['rhs']['playername']);

                                    wpns = value['data']['WeaponStats'];
                                    wpns.forEach(function (value) {
                                        if (value['kills'] >= options['minimumKills']) {

                                            var niceHSR = value['headshotratio'] * 100,
                                                niceACC = value['accuracy'] * 100,
                                                id = value['id'],
                                                name = value['description']['name'];
                                            niceHSR = niceHSR.toFixed(0),
                                            niceACC = niceACC.toFixed(0);

                                            if ((options['weaponStatsHSR'][id] != 'undefined' || options['weaponStatsHSR'][id] != '') && (options['weaponStatsACC'][id] != 'undefined' || options['weaponStatsACC'][id] != '')) {
                                                if (options['kickForWeaponHSR'] == true) {

                                                    if (value['headshotratio'] >= options['weaponStatsHSR'][id]) {
                                                        kick = true;
                                                        kick_reason = 'Cheating detected -> HSR (' + name + '): ' + niceHSR + '%';
                                                    }
                                                }

                                                if (options['kickForWeaponACC'] == true && kick == false) {
                                                    if (value['accuracy'] >= options['weaponStatsACC'][id]) {
                                                        kick = true;
                                                        kick_reason = 'Cheating detected -> Accuracy (' + name + '): ' + niceACC + '%';
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }

                                if (kick) {
                                    rcon.kick(onediff['item']['rhs']['slot'], kick_reason);
                                    console.log('[KICK-STATUS] Kicked ' + onediff['item']['rhs']['playername'] + ' for: ' + kick_reason);
                                }
                            });
                        }).on('error', function (e) {
                            console.log('got error: ' + e.message);
                        });;
                    }
                }
            });
            
            oldPlayers = newPlayers;
        }
    });
};

setInterval(main, 5000);

