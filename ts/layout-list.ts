import { ForceDirectedLayout,
    HierarchicalLayout,
    HierarchyLayout,
    GridLayout,
    AbsoluteLayout,
    BalloonLayout,
    CircularLayout,
    RowLayout,
    ColumnLayout} from "@jsplumbtoolkit/browser-ui"

const layoutSummaries = {
    [HierarchyLayout.type]:{
        desc:"The Hierarchy layout positions vertices in a hierarchy, oriented either vertically or horizontally, following a slightly modified version of the 'Sugiyama' method",
        id:"hierarchy",
        label:"Hierarchy"
    },
    [BalloonLayout.type]:{
        desc:"This layout groups vertices into clusters. It is useful for unstructured data - database schemas, mind maps, graphs, etc. For a given input graph the structure of the layout will always be the same, but this layout does not extend the Absolute layout as the ForceDirected layout does, so all vertex placement is decided upon by the layout",
        id:"balloon",
        label:"Balloon"
    },
    [ForceDirectedLayout.type]:{
        desc:"This layout models edges as springs, placing connected elements nearby, and ensuring adequate space between all elements. It is useful for unstructured data - database schemas, mind maps, graphs, etc. Force-directed algorithms initially position nodes with a degree of randomness and so do not ever produce exactly the same result twice",
        id:"force-directed",
        label:"Force Directed"
    },
    [AbsoluteLayout.type]:{
        desc:"This layout, by default, retrieves the left and top members in your vertex data, and uses these as the left and top CSS properties. However, you can provide your own function to extract appropriate values, should you need to. For applications in which the positions of the nodes is determined by your users, the Absolute layout is a good choice",
        id:"absolute",
        label:"Absolute"
    },
    [CircularLayout.type]:{
        desc:"Arranges all the nodes/groups in the toolkit instance into a circle, with a radius sufficiently large that no two nodes/groups overlap. You can optionally choose to display the root of the dataset in the center of the circle.",
        id:"circular",
        label:"circular"
    },
    [GridLayout.type]:{
        desc:"This layout arranges elements into a grid, optionally with a fixed number of rows or columns.",
        id:"grid",
        label:"Grid"
    },
    [ColumnLayout.type]:{
        desc:"This layout arranges elements into a single column",
        id:"column",
        label:"Column"
    },
    [RowLayout.type]:{
        desc:"This layout arranges elements into a single row",
        id:"row",
        label:"Row"
    },
    [HierarchicalLayout.type]:{
        desc:"The Hierarchical layout positions vertices in a hierarchy, oriented either vertically or horizontally. The classic use cases for this layout are such things as a family tree or an org chart. This layout is deprecated and will be removed in a future release - use the Hierarchy layout instead.",
        id:"hierarchical",
        label:"Hierarchical"
    }
}

export function getSummary(type) {
    return layoutSummaries[type].desc
}

export const SUPPORTED_LAYOUTS = [
    HierarchyLayout.type, ForceDirectedLayout.type, BalloonLayout.type,
    CircularLayout.type, GridLayout.type, ColumnLayout.type, RowLayout.type, HierarchicalLayout.type
]
