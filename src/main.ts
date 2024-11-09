import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
    "sheetOrder": [
        "sheet1"
    ],
    "name": "",
    "locale": "zhCN",
    "styles": {
        "f1s1": {
            "ff": "Arial",
            "fs": "14",
            "bl": 1,
            "it": 1,
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            }
        },
        "f2s2": {
            "ff": "Arial",
            "fs": "9",
            "bl": 1,
            "it": 0,
            "bd": {
                "r": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "t": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            },
            "bg": {
                "rgb": "#d8d8d8"
            }
        },
        "f2s3": {
            "ff": "Arial",
            "fs": "9",
            "bl": 1,
            "it": 0,
            "bd": {
                "l": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "t": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            },
            "bg": {
                "rgb": "#d8d8d8"
            }
        },
        "f2s4": {
            "ff": "Arial",
            "fs": "9",
            "bl": 1,
            "it": 0,
            "bd": {
                "l": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "r": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            },
            "bg": {
                "rgb": "#d8d8d8"
            }
        },
        "f2s5": {
            "ff": "Arial",
            "fs": "9",
            "bl": 1,
            "it": 0,
            "bd": {
                "r": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            },
            "bg": {
                "rgb": "#d8d8d8"
            }
        },
        "f2s6": {
            "ff": "Arial",
            "fs": "9",
            "bl": 1,
            "it": 0,
            "bd": {
                "l": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "ht": 2,
            "vt": 2,
            "cl": {
                "rgb": "#000000"
            },
            "bg": {
                "rgb": "#d8d8d8"
            }
        }
    },
    "sheets": {
        "sheet1": {
            "id": "sheet1",
            "name": "测试",
            "tabColor": "",
            "hidden": 0,
            "rowCount": 3,
            "columnCount": 5,
            "zoomRatio": 1,
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 73,
            "defaultRowHeight": 19,
            "cellData": {
                "0": {
                    "0": {
                        "v": "Programming Interfaces Summary List",
                        "s": "f1s1",
                        "t": 1
                    }
                },
                "1": {
                    "0": {
                        "v": "Object Name",
                        "s": "f2s2",
                        "t": 1
                    },
                    "1": {
                        "v": "Programming Interfaces",
                        "s": "f2s3",
                        "t": 1
                    }
                },
                "2": {
                    "1": {
                        "v": "Type",
                        "s": "f2s4",
                        "t": 1
                    },
                    "2": {
                        "v": "No.",
                        "s": "f2s5",
                        "t": 1
                    },
                    "3": {
                        "v": "Name",
                        "s": "f2s4",
                        "t": 1
                    },
                    "4": {
                        "v": "Description",
                        "s": "f2s6",
                        "t": 1
                    }
                }
            },
            "rowData": {
                "0": {
                    "h": 34
                }
            },
            "columnData": {
                "0": {
                    "w": 90
                },
                "1": {
                    "w": 83
                },
                "2": {
                    "w": 67
                },
                "3": {
                    "w": 221
                },
                "4": {
                    "w": 150
                }
            },
            "showGridlines": 1,
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "mergeData": [
                {
                    "startRow": 0,
                    "startColumn": 0,
                    "endRow": 0,
                    "endColumn": 4
                },
                {
                    "startRow": 1,
                    "startColumn": 0,
                    "endRow": 2,
                    "endColumn": 0
                },
                {
                    "startRow": 1,
                    "startColumn": 1,
                    "endRow": 1,
                    "endColumn": 4
                }
            ]
        }
    }
}
);
