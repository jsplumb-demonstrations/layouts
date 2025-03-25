import { ForceDirectedLayout,
    HierarchicalLayout,
    HierarchyLayout,
    GridLayout,
    AbsoluteLayout,
    BalloonLayout,
    CircularLayout,
    RowLayout,
    ColumnLayout, DEFAULT} from "@jsplumbtoolkit/browser-ui"

export const layoutParams = {
    [ForceDirectedLayout.type]:{
        absoluteBacked:false
    },
    [HierarchicalLayout.type]:{
        orientation: "horizontal",
        padding: {x:100, y:60}
    },
    [CircularLayout.type]:{
        padding:{x:15, y:15}
    }
};

const extraParams:Record<string, Array<any>> = {
    [HierarchicalLayout.type]:[
        {
            id:"Compressed",
            params:{
                orientation: "horizontal",
                padding: {x:30,y:30},
                spacing:"compress",
            },
            label:"Compressed"

        },
        {
            id:"AlignStart",
            params:{
                orientation: "horizontal",
                padding: {x:100, y:60},
                align:"start"
            },
            label:"Align start"
        },
        {
            id:"AlignEnd",
            params:{
                orientation: "horizontal",
                padding: {x:100, y:60},
                align:"end"
            },
            label:"Align end"
        },

        {
            id:"Vertical",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60}
            },
            label:"Vertical axis"
        },

        {
            id:"VerticalAlignStart",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60},
                align:"start"
            },
            label:"Vertical axis, align start"
        },
        {
            id:"VerticalAlignEnd",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60},
                align:"end"
            },
            label:"Vertical axis, align end"
        },

        {
            id:"Inverted",
            params:{
                orientation: "horizontal",
                padding: {x:160, y:60},
                invert:true,
            },
            label:"Inverted"
        },
        {
            id:"InvertedAlignStart",
            params:{
                orientation: "horizontal",
                padding: {x:160, y:60},
                invert:true,
                align:"start"
            },
            label:"Inverted, align start"
        },
        {
            id:"InvertedAlignEnd",
            params:{
                orientation: "horizontal",
                padding: {x:160, y:60},
                invert:true,
                align:"end"
            },
            label:"Inverted, align end"
        },

        {
            id:"VerticalInverted",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60},
                invert:true
            },
            label:"Vertical axis, inverted"
        },
        {
            id:"VerticalInvertedAlignStart",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60},
                invert:true,
                align:"start"
            },
            label:"Vertical axis, align start"
        },
        {
            id:"VerticalInvertedAlignEnd",
            params:{
                orientation: "vertical",
                padding: {x:160, y:60},
                invert:true,
                align:"end"
            },
            label:"Vertical axis, align end"
        }
    ],
    [CircularLayout.type]:[
        {
            id:"CenteredRoot",
            params:{
                padding:{x:15, y:15},
                centerRoot:true
            },
            label:"Root at center"
        }
    ],
    [GridLayout.type]:[
        {
            id:"FixedColumns",
            params:{
                columns:2
            },
            label:"Fixed column count"
        },
        {
            id:"FixedRows",
            params:{
                rows:2
            },
            label:"Fixed row count"
        }
    ],
    [HierarchyLayout.type]:[
        {
            id:"Vertical",
            params:{
                axis: "vertical"
            },
            label:"Vertical axis"
        },
        {
            id:"PlacementStrategyCenter",
            params:{
                placementStrategy: "center"
            },
            label:"Center placement"
        }
    ]
}

export function hasExtras(type:string) {
    return extraParams[type] != null
}

export function getExtras(type:string) {
    return extraParams[type] || []
}

export function getExtra(type:string, extra:string) {
    return extraParams[type].find(e => e.id === extra)
}

export function getParams(type:string, extra:string) {
    return extra == null || extra.length === 0 ? layoutParams[type] : getExtra(type, extra).params
}
