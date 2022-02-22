export default
{
    "debug": true,
    "customcommands": {
        "prefix": "!",
        "ban": true,
        "help": true,
        "op": true,
        "credits": true,
        "allowgma": true,
        "allowgmc": true,
        "allowgms": true,
        "bedrockvalidate": true,
        "modules": true,
        "npc": true,
        "overidecommandblocksenabled": true,
        "removecommandblocks": true,
        "worldborder": true,
        "xray": true,
        "autoclicker": true,
        "phase": true,
        "ecwipe": true,
        "freeze": true,
        "stats": true,
        "fullreport": true,
        "kick": true,
        "mute": true,
        "unmute": true,
        "fly": true,
        "invsee": true,
        "notify": true,
        "tag": true,
        "vanish": true
    },
    "modules": {
        "filterUnicodeChat": true,
        "badpackets2": {
            "enabled": true,
            "minLength": 1,
            "maxlength": 512,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "spammerA": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "spammerB": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "spammerC": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "spammerD": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "crasherA": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "namespoofA": {
            "enabled": true,
            "minNameLength": 3,
            "maxNameLength": 16,
            "punishment": "kick",
            "minVlbeforeBan": 0
        },
        "namespoofB": {
            "enabled": true,
            "regex": /[^A-Za-z0-9_() ]/,
            "punishment": "kick",
            "minVlbeforeBan": 0
        },
        "bedrockValidate": {
            "enabled": true,
            "overworld": true,
            "nether": true
        },
        "reachA": {
            "enabled": true,
            "reach": 5,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "reachB": {
            "enabled": true,
            "reach": 7,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "reachC": {
            "enabled": true,
            "reach": 7,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "noslowA": {
            "enabled": true,
            "speed": 0.12,
            "maxSpeed": 0.16,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "illegalitemsC": {
            "enabled": true,
            "maxStack": 64,
            "punishment": "ban",
            "minVlbeforeBan": 3
        },
        "invalidsprintA": {
            "enabled": true,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
        "illegalitemsD": {
            "enabled": false,
            "illegalItems": [
                "minecraft:beehive",
                "minecraft:bee_nest",
                "minecraft:movingblock"
            ],
            "punishment": "ban",
            "minVlbeforeBan": 3
        },
        "commandblockexploitF": {
            "enabled": false,
            "bannedBlocks": [
                "minecraft:beehive",
                "minecraft:bee_nest",
                "minecraft:movingblock"
            ],
            "punishment": "ban",
            "minVlbeforeBan": 1
        },
        "nukerA": {
            "enabled": true,
            "maxBlocks": 2,
            "punishment": "none",
            "minVlbeforeBan": 0
        },
    }
};