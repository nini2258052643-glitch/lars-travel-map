/* =====================================================
   LARS / IN TRANSIT
   script.js

   本版本只修改：
   1. 地图省份亮 / 暗逻辑
   2. 城市点击一次放大，再点一次退出
   3. MEMORY 可滚动 + 点击进入独立记忆页面

   其他原有功能保持不变
===================================================== */


/* =====================================================
   页面
===================================================== */

const homePage = document.querySelector("#home-page");
const mapPage = document.querySelector("#map-page");
const enterMap = document.querySelector("#enter-map");
const backHome = document.querySelector("#back-home");


/* =====================================================
   日记面板
===================================================== */

const placePanel = document.querySelector("#place-panel");
const closePlace = document.querySelector("#close-place");
const placeTitle = document.querySelector("#place-title");
const placeLocation = document.querySelector("#place-location");
const placeDescription = document.querySelector("#place-description");


/* =====================================================
   地图容器
===================================================== */

const mapFrame = document.querySelector("#map-frame");
const mapViewport = document.querySelector("#map-viewport");


/* =====================================================
   城市数据
===================================================== */

const cities = [

    {
        id: "macao",
        name: "澳门",
        province: "澳门",
        x: 730.8,
        y: 740.5,
        description: "这里将放置 Lars 关于澳门的私人记忆。"
    },

    {
        id: "beijing",
        name: "北京",
        province: "北京",
        x: 736.9,
        y: 335.3,
        description: "这里将放置 Lars 关于北京的私人记忆。"
    },

    {
        id: "xiamen",
        name: "厦门",
        province: "福建",
        x: 799.7,
        y: 685.8,
        description: "这里将放置 Lars 关于厦门的私人记忆。"
    },

    {
        id: "changsha",
        name: "长沙",
        province: "湖南",
        x: 706.5,
        y: 599.5,
        description: "这里将放置 Lars 关于长沙的私人记忆。"
    },

    {
        id: "nanjing",
        name: "南京",
        province: "江苏",
        x: 797.7,
        y: 511.8,
        description: "这里将放置 Lars 关于南京的私人记忆。"
    },

    {
        id: "hangzhou",
        name: "杭州",
        province: "浙江",
        x: 834.376,
        y: 538.353,
        description: "这里将放置 Lars 关于杭州的私人记忆。"
    },

    {
        id: "jiaxing",
        name: "嘉兴",
        province: "浙江",
        x: 833.2,
        y: 540.6,
        description: "这里将放置 Lars 关于嘉兴的私人记忆。"
    },

    {
        id: "shanghai",
        name: "上海",
        province: "上海",
        x: 844.5,
        y: 529.1,
        description: "这里将放置 Lars 关于上海的私人记忆。"
    },

    {
        id: "haikou",
        name: "海口",
        province: "海南",
        x: 670.3,
        y: 796.7,
        description: "这里将放置 Lars 关于海口的私人记忆。"
    },

    {
        id: "zhengzhou",
        name: "郑州",
        province: "河南",
        x: 703.9,
        y: 468.5,
        description: "这里将放置 Lars 关于郑州的私人记忆。"
    },

    {
        id: "luzhou",
        name: "泸州",
        province: "四川",
        x: 577.7,
        y: 593.6,
        description: "这里将放置 Lars 关于泸州的私人记忆。"
    },

    {
        id: "changzhou",
        name: "常州",
        province: "江苏",
        x: 818.0,
        y: 516.8,
        description: "这里将放置 Lars 关于常州的私人记忆。"
    },

    {
        id: "wuyuan",
        name: "婺源",
        province: "江西",
        x: 787.0,
        y: 576.8,
        description: "这里将放置 Lars 关于婺源的私人记忆。"
    },

    {
        id: "nanning",
        name: "南宁",
        province: "广西",
        x: 626.4,
        y: 731.9,
        description: "这里将放置 Lars 关于南宁的私人记忆。"
    },

    {
        id: "yangzhou",
        name: "扬州",
        province: "江苏",
        x: 807.6,
        y: 503.8,
        description: "这里将放置 Lars 关于扬州的私人记忆。"
    },

    {
        id: "wuhan",
        name: "武汉",
        province: "湖北",
        x: 724.4,
        y: 547.3,
        description: "这里将放置 Lars 关于武汉的私人记忆。"
    },

    {
        id: "guangzhou",
        name: "广州",
        province: "广东",
        x: 730.9,
        y: 717.5,
        description: "这里将放置 Lars 关于广州的私人记忆。"
    },

    {
        id: "wuxi",
        name: "无锡",
        province: "江苏",
        x: 824.3,
        y: 523.9,
        description: "这里将放置 Lars 关于无锡的私人记忆。"
    },

    {
        id: "baotou",
        name: "包头",
        province: "内蒙古",
        x: 630.3,
        y: 320.9,
        description: "这里将放置 Lars 关于包头的私人记忆。"
    },

    {
        id: "zhuzhou",
        name: "株洲",
        province: "湖南",
        x: 709.7,
        y: 612.4,
        description: "这里将放置 Lars 关于株洲的私人记忆。"
    },

    {
        id: "shenyang",
        name: "沈阳",
        province: "辽宁",
        x: 840.2,
        y: 289.3,
        description: "这里将放置 Lars 关于沈阳的私人记忆。"
    },

    {
        id: "chongzuo",
        name: "崇左",
        province: "广西",
        x: 622.2,
        y: 741.0,
        description: "这里将放置 Lars 关于崇左的私人记忆。"
    },

    {
        id: "shenzhen",
        name: "深圳",
        province: "广东",
        x: 735.1,
        y: 732.8,
        description: "这里将放置 Lars 关于深圳的私人记忆。"
    },

    {
        id: "hefei",
        name: "合肥",
        province: "安徽",
        x: 780.7,
        y: 514.6,
        description: "这里将放置 Lars 关于合肥的私人记忆。"
    },

    {
        id: "qingdao",
        name: "青岛",
        province: "山东",
        x: 818.7,
        y: 409.8,
        description: "这里将放置 Lars 关于青岛的私人记忆。"
    },

    {
        id: "dongguan",
        name: "东莞",
        province: "广东",
        x: 729.1,
        y: 722.1,
        description: "这里将放置 Lars 关于东莞的私人记忆。"
    },

    {
        id: "haerbin",
        name: "哈尔滨",
        province: "黑龙江",
        x: 905.0,
        y: 193.1,
        description: "这里将放置 Lars 关于哈尔滨的私人记忆。"
    },

    {
        id: "chengdu",
        name: "成都",
        province: "四川",
        x: 542.5,
        y: 560.5,
        description: "这里将放置 Lars 关于成都的私人记忆。"
    },

    {
        id: "ningbo",
        name: "宁波",
        province: "浙江",
        x: 848.2,
        y: 560.2,
        description: "这里将放置 Lars 关于宁波的私人记忆。"
    },

    {
        id: "chongqing",
        name: "重庆",
        province: "重庆",
        x: 582.4,
        y: 584.3,
        description: "这里将放置 Lars 关于重庆的私人记忆。"
    },

    {
        id: "huainan",
        name: "淮南",
        province: "安徽",
        x: 766.2,
        y: 500.1,
        description: "这里将放置 Lars 关于淮南的私人记忆。"
    },

    {
        id: "guiyang",
        name: "贵阳",
        province: "贵州",
        x: 594.7,
        y: 639.7,
        description: "这里将放置 Lars 关于贵阳的私人记忆。"
    }
];


/* =====================================================
   所有原 SVG 城市点
   用于把原图里没有交互功能的黑色小点清掉。

   注意：
   这些不是网站的交互城市。
   这里只是原 SVG 内部的点位置。
===================================================== */

const originalSvgCityPoints = [

    { x: 888.691, y: 177.301 },
    { x: 818.696, y: 409.846 },
    { x: 766.587, y: 412.806 },
    { x: 834.376, y: 538.353 },
    { x: 870.345, y: 232.154 },
    { x: 840.175, y: 289.336 },
    { x: 814.576, y: 502.258 },
    { x: 529.477, y: 440.815 },
    { x: 819.629, y: 666.849 },
    { x: 730.857, y: 717.485 },
    { x: 765.267, y: 587.116 },
    { x: 294.369, y: 575.742 },
    { x: 724.380, y: 547.347 },
    { x: 706.455, y: 599.511 },
    { x: 510.318, y: 695.119 },
    { x: 703.854, y: 468.498 },
    { x: 265.104, y: 241.267 },
    { x: 620.265, y: 479.299 },
    { x: 542.457, y: 560.471 },
    { x: 838.368, y: 633.876 },
    { x: 627.948, y: 422.010 },
    { x: 677.665, y: 386.015 },
    { x: 860.955, y: 515.055 },
    { x: 758.719, y: 353.890 },
    { x: 736.916, y: 335.280 },
    { x: 582.388, y: 584.291 },
    { x: 626.401, y: 731.926 },
    { x: 594.664, y: 639.695 },
    { x: 685.556, y: 347.235 },
    { x: 846.823, y: 377.350 },
    { x: 831.345, y: 342.295 },
    { x: 477.347, y: 425.344 },
    { x: 878.618, y: 656.827 },
    { x: 670.288, y: 796.675 },
    { x: 665.115, y: 319.161 },
    { x: 716.268, y: 382.428 },
    { x: 748.272, y: 735.761 },
    { x: 730.806, y: 740.493 },
    { x: 660.727, y: 673.615 },
    { x: 780.728, y: 514.581 },
    { x: 570.424, y: 387.439 },
    { x: 840.645, y: 511.687 },
    { x: 774.503, y: 459.494 },
    { x: 854.876, y: 584.558 },
    { x: 868.583, y: 543.863 }
];


/* =====================================================
   状态
===================================================== */

let currentCity = null;

let cityHotspots = [];

let hotspotAnimationStarted = false;

let mapImage = null;

let mapSourceImage = null;

let mapScale = 1;

let mapX = 0;

let mapY = 0;

let dragging = false;

let dragStartX = 0;

let dragStartY = 0;

let startMapX = 0;

let startMapY = 0;

let mapNaturalWidth = 1000;

let mapNaturalHeight = 850;

let mapIsAnimating = false;


/* =====================================================
   首页
===================================================== */

if (homePage) {

    homePage.classList.add("active");

    homePage.style.display = "";

    homePage.style.visibility = "visible";
}


/* =====================================================
   进入地图
===================================================== */

if (enterMap) {

    enterMap.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (homePage) {

                homePage.classList.remove(
                    "active"
                );

                homePage.style.visibility =
                    "hidden";

                homePage.style.pointerEvents =
                    "none";
            }


            if (mapPage) {

                mapPage.classList.add(
                    "active"
                );

                mapPage.style.display =
                    "block";

                mapPage.style.visibility =
                    "visible";

                mapPage.style.opacity =
                    "1";

                mapPage.style.pointerEvents =
                    "auto";

                mapPage.style.transform =
                    "none";

                mapPage.style.zIndex =
                    "100";

                mapPage.style.position =
                    "fixed";

                mapPage.style.left =
                    "0";

                mapPage.style.top =
                    "0";

                mapPage.style.width =
                    "100vw";

                mapPage.style.height =
                    "100vh";
            }


            setTimeout(
                function () {

                    createLocalMap();

                },
                50
            );
        }
    );
}


/* =====================================================
   创建地图
===================================================== */

function createLocalMap() {

    if (!mapViewport) {

        console.error(
            "找不到 #map-viewport"
        );

        return;
    }


    mapViewport.style.display =
        "block";

    mapViewport.style.visibility =
        "visible";

    mapViewport.style.opacity =
        "1";

    mapViewport.style.position =
        "absolute";

    mapViewport.style.left =
        "0";

    mapViewport.style.top =
        "0";

    mapViewport.style.width =
        "100%";

    mapViewport.style.height =
        "100%";

    mapViewport.style.overflow =
        "hidden";

    mapViewport.style.cursor =
        "grab";


    const oldSvg =
        document.querySelector(
            "#china-map"
        );


    if (oldSvg) {

        oldSvg.style.display =
            "none";
    }


    const oldCanvas =
        document.querySelector(
            "#local-china-map"
        );


    if (oldCanvas) {

        mapImage =
            oldCanvas;

        createCityHotspots();

        if (
            mapImage.width
        ) {

            resetMap();
        }

        return;
    }


    /*
       先用普通 img 加载 SVG。

       不使用 fetch。
       所以直接打开项目时也不会出现
       CHINA MAP NOT FOUND。
    */

    mapSourceImage =
        document.createElement(
            "img"
        );


    mapSourceImage.src =
        "images/china-map.svg";


    mapSourceImage.style.position =
        "absolute";

    mapSourceImage.style.width =
        "1000px";

    mapSourceImage.style.height =
        "850px";

    mapSourceImage.style.left =
        "-99999px";

    mapSourceImage.style.top =
        "-99999px";

    mapSourceImage.style.pointerEvents =
        "none";


    document.body.appendChild(
        mapSourceImage
    );


    mapSourceImage.onload =
        function () {

            mapNaturalWidth =
                mapSourceImage.naturalWidth ||
                1000;

            mapNaturalHeight =
                mapSourceImage.naturalHeight ||
                850;


            createProcessedMap();


            setupDragging();

            setupWheel();

        };


    mapSourceImage.onerror =
        function () {

            console.error(
                "中国地图 SVG 加载失败：",
                mapSourceImage.src
            );

            showMapError();
        };
}


/* =====================================================
   创建处理后的地图

   核心逻辑：

   原地图：
   省份 = #99CC99
   城市点 = #32432e

   现在：
   有你指定城市的省份 = 亮绿色
   没有指定城市的省份 = 暗灰绿色
   所有原来的城市黑点 = 删除

   最终仍然是一张地图。
===================================================== */

function createProcessedMap() {

    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.id =
        "local-china-map";


    canvas.width =
        1000;

    canvas.height =
        850;


    canvas.style.position =
        "absolute";

    canvas.style.left =
        "0";

    canvas.style.top =
        "0";

    canvas.style.width =
        "1000px";

    canvas.style.height =
        "850px";

    canvas.style.maxWidth =
        "none";

    canvas.style.maxHeight =
        "none";

    canvas.style.display =
        "block";

    canvas.style.userSelect =
        "none";

    canvas.style.pointerEvents =
        "none";

    canvas.style.transformOrigin =
        "0 0";


    mapViewport.appendChild(
        canvas
    );


    mapImage =
        canvas;


    const ctx =
        canvas.getContext(
            "2d",
            {
                willReadFrequently:
                    true
            }
        );


    ctx.drawImage(
        mapSourceImage,
        0,
        0,
        1000,
        850
    );


    const imageData =
        ctx.getImageData(
            0,
            0,
            1000,
            850
        );


    const data =
        imageData.data;


    const width =
        1000;

    const height =
        850;


    /*
       找到原来的省份绿色像素。
    */

    const provinceMask =
        new Uint8Array(
            width * height
        );


    for (
        let y = 0;
        y < height;
        y++
    ) {

        for (
            let x = 0;
            x < width;
            x++
        ) {

            const i =
                (
                    y *
                    width +
                    x
                ) *
                4;


            const r =
                data[i];

            const g =
                data[i + 1];

            const b =
                data[i + 2];


            /*
               判断是否是原来的
               #99CC99 省份区域。
            */

            if (
                g > 165 &&
                g > r + 25 &&
                g > b + 25 &&
                r > 110 &&
                r < 190 &&
                b > 110 &&
                b < 190
            ) {

                provinceMask[
                    y * width + x
                ] = 1;
            }
        }
    }


    /*
       连通区域。

       每一个省份会被识别成一个区域。
    */

    const regionMap =
        new Int32Array(
            width * height
        );

    regionMap.fill(
        -1
    );


    const regions = [];

    let regionId = 0;


    for (
        let y = 0;
        y < height;
        y++
    ) {

        for (
            let x = 0;
            x < width;
            x++
        ) {

            const index =
                y * width + x;


            if (
                provinceMask[index] !== 1 ||
                regionMap[index] !== -1
            ) {

                continue;
            }


            const stack = [
                index
            ];


            regionMap[index] =
                regionId;


            let size =
                0;


            while (
                stack.length
            ) {

                const current =
                    stack.pop();


                size++;


                const cx =
                    current %
                    width;


                const cy =
                    Math.floor(
                        current /
                        width
                    );


                /*
                   上
                */

                if (
                    cy > 0
                ) {

                    const n =
                        current -
                        width;

                    if (
                        provinceMask[n] === 1 &&
                        regionMap[n] === -1
                    ) {

                        regionMap[n] =
                            regionId;

                        stack.push(
                            n
                        );
                    }
                }


                /*
                   下
                */

                if (
                    cy <
                    height - 1
                ) {

                    const n =
                        current +
                        width;

                    if (
                        provinceMask[n] === 1 &&
                        regionMap[n] === -1
                    ) {

                        regionMap[n] =
                            regionId;

                        stack.push(
                            n
                        );
                    }
                }


                /*
                   左
                */

                if (
                    cx > 0
                ) {

                    const n =
                        current - 1;

                    if (
                        provinceMask[n] === 1 &&
                        regionMap[n] === -1
                    ) {

                        regionMap[n] =
                            regionId;

                        stack.push(
                            n
                        );
                    }
                }


                /*
                   右
                */

                if (
                    cx <
                    width - 1
                ) {

                    const n =
                        current + 1;

                    if (
                        provinceMask[n] === 1 &&
                        regionMap[n] === -1
                    ) {

                        regionMap[n] =
                            regionId;

                        stack.push(
                            n
                        );
                    }
                }
            }


            regions.push({
                id:
                    regionId,

                size:
                    size,

                bright:
                    false
            });


            regionId++;
        }
    }


    /*
       找到每个用户城市所在的省份区域。
    */

    cities.forEach(
        function (city) {

            const found =
                findNearestProvinceRegion(
                    city.x,
                    city.y,
                    provinceMask,
                    regionMap,
                    width,
                    height
                );


            if (
                found !== -1 &&
                regions[found]
            ) {

                regions[found].bright =
                    true;
            }
        }
    );


    /*
       两种省份颜色。

       有城市：
       更亮、更有存在感。

       没有城市：
       更暗、更退后。
    */

    const brightColor =
        {
            r: 159,
            g: 194,
            b: 157
        };


    const darkColor =
        {
            r: 205,
            g: 211,
            b: 204
        };


    /*
       重新给省份上色。
    */

    for (
        let y = 0;
        y < height;
        y++
    ) {

        for (
            let x = 0;
            x < width;
            x++
        ) {

            const index =
                y * width + x;


            if (
                provinceMask[index] !== 1
            ) {

                continue;
            }


            const region =
                regions[
                    regionMap[index]
                ];


            if (!region) {
                continue;
            }


            const color =
                region.bright
                    ? brightColor
                    : darkColor;


            const i =
                index * 4;


            data[i] =
                color.r;

            data[i + 1] =
                color.g;

            data[i + 2] =
                color.b;
        }
    }


    /*
       清除原 SVG 里的所有城市黑点。

       不管是不是你指定的城市，
       原图里的点全部去掉。

       真正的交互点由下面 JS 单独生成。
    */

    originalSvgCityPoints.forEach(
        function (point) {

            eraseOriginalCityPoint(
                data,
                provinceMask,
                regionMap,
                regions,
                point.x,
                point.y,
                width,
                height
            );
        }
    );


    ctx.putImageData(
        imageData,
        0,
        0
    );


    /*
       删除隐藏的原始 img。
    */

    if (
        mapSourceImage
    ) {

        mapSourceImage.remove();

        mapSourceImage =
            null;
    }


    resetMap();

    createCityHotspots();
}


/* =====================================================
   找城市所在省份区域
===================================================== */

function findNearestProvinceRegion(
    x,
    y,
    provinceMask,
    regionMap,
    width,
    height
) {

    const startX =
        Math.round(x);

    const startY =
        Math.round(y);


    /*
       先在周围寻找省份颜色。

       因为城市原始黑点会盖住
       城市中心的绿色。
    */

    for (
        let radius = 5;
        radius <= 28;
        radius += 2
    ) {

        for (
            let dy = -radius;
            dy <= radius;
            dy++
        ) {

            for (
                let dx = -radius;
                dx <= radius;
                dx++
            ) {

                if (
                    Math.abs(dx) <
                    radius &&
                    Math.abs(dy) <
                    radius
                ) {

                    continue;
                }


                const px =
                    startX + dx;

                const py =
                    startY + dy;


                if (
                    px < 0 ||
                    px >= width ||
                    py < 0 ||
                    py >= height
                ) {

                    continue;
                }


                const index =
                    py * width + px;


                if (
                    provinceMask[index] ===
                    1
                ) {

                    return regionMap[
                        index
                    ];
                }
            }
        }
    }


    return -1;
}


/* =====================================================
   删除原 SVG 城市点
===================================================== */

function eraseOriginalCityPoint(
    data,
    provinceMask,
    regionMap,
    regions,
    centerX,
    centerY,
    width,
    height
) {

    const regionId =
        findNearestProvinceRegion(
            centerX,
            centerY,
            provinceMask,
            regionMap,
            width,
            height
        );


    let replacement =
        {
            r: 205,
            g: 211,
            b: 204
        };


    if (
        regionId !== -1 &&
        regions[regionId] &&
        regions[regionId].bright
    ) {

        replacement =
            {
                r: 159,
                g: 194,
                b: 157
            };
    }


    /*
       找附近真正的省份颜色。
       用它覆盖原来的黑点。
    */

    const radius =
        11;


    for (
        let y = -radius;
        y <= radius;
        y++
    ) {

        for (
            let x = -radius;
            x <= radius;
            x++
        ) {

            if (
                x * x +
                y * y >
                radius * radius
            ) {

                continue;
            }


            const px =
                Math.round(
                    centerX + x
                );

            const py =
                Math.round(
                    centerY + y
                );


            if (
                px < 0 ||
                px >= width ||
                py < 0 ||
                py >= height
            ) {

                continue;
            }


            const index =
                py * width + px;


            const i =
                index * 4;


            data[i] =
                replacement.r;

            data[i + 1] =
                replacement.g;

            data[i + 2] =
                replacement.b;

            data[i + 3] =
                255;
        }
    }
}


/* =====================================================
   地图加载失败
===================================================== */

function showMapError() {

    let error =
        document.querySelector(
            "#map-error"
        );


    if (!error) {

        error =
            document.createElement(
                "div"
            );


        error.id =
            "map-error";


        error.style.position =
            "absolute";

        error.style.left =
            "50%";

        error.style.top =
            "50%";

        error.style.transform =
            "translate(-50%, -50%)";

        error.style.textAlign =
            "center";

        error.style.fontFamily =
            "Arial, sans-serif";

        error.style.color =
            "#555";

        error.style.zIndex =
            "999";


        error.innerHTML =
            "<div style='font-size:14px;letter-spacing:.15em;margin-bottom:10px;'>CHINA MAP NOT FOUND</div>" +
            "<div style='font-size:11px;color:#999;'>请确认 images/china-map.svg 存在</div>";


        mapViewport.appendChild(
            error
        );
    }
}


/* =====================================================
   地图初始大小
===================================================== */

function resetMap() {

    if (
        !mapImage ||
        !mapViewport
    ) {

        return;
    }


    const viewportWidth =
        mapViewport.clientWidth ||
        window.innerWidth;


    const viewportHeight =
        mapViewport.clientHeight ||
        window.innerHeight;


    const scaleX =
        viewportWidth /
        mapNaturalWidth;


    const scaleY =
        viewportHeight /
        mapNaturalHeight;


    mapScale =
        Math.min(
            scaleX,
            scaleY
        ) * 0.9;


    mapX =
        (
            viewportWidth -
            mapNaturalWidth *
            mapScale
        ) / 2;


    mapY =
        (
            viewportHeight -
            mapNaturalHeight *
            mapScale
        ) / 2;


    applyMapTransform();
}


/* =====================================================
   地图变换
===================================================== */

function applyMapTransform() {

    if (!mapImage) {
        return;
    }


    mapImage.style.transform =
        "translate(" +
        mapX +
        "px, " +
        mapY +
        "px) scale(" +
        mapScale +
        ")";
}


/* =====================================================
   城市交互点
===================================================== */

function createCityHotspots() {

    if (!mapViewport) {
        return;
    }


    document
        .querySelectorAll(
            ".city-hotspot"
        )
        .forEach(
            function (node) {
                node.remove();
            }
        );


    cityHotspots = [];


    cities.forEach(
        function (city) {

            const hotspot =
                document.createElement(
                    "button"
                );


            hotspot.type =
                "button";


            hotspot.className =
                "city-hotspot";


            hotspot.dataset.cityId =
                city.id;


            hotspot.setAttribute(
                "aria-label",
                "打开" +
                city.name +
                "记忆"
            );


            hotspot.title =
                city.name;


            hotspot.style.position =
                "absolute";


            hotspot.style.width =
                "14px";


            hotspot.style.height =
                "14px";


            hotspot.style.padding =
                "0";


            hotspot.style.margin =
                "0";


            hotspot.style.border =
                "0";


            hotspot.style.borderRadius =
                "50%";


            hotspot.style.background =
                "rgba(255,255,255,.96)";


            hotspot.style.boxShadow =
                "0 0 0 1.5px rgba(45,55,45,.78), 0 2px 8px rgba(0,0,0,.12)";


            hotspot.style.cursor =
                "pointer";


            hotspot.style.zIndex =
                "30";


            hotspot.style.pointerEvents =
                "auto";


            hotspot.style.appearance =
                "none";


            hotspot.style.boxSizing =
                "border-box";


            /*
               小纸条
            */

            const label =
                document.createElement(
                    "span"
                );


            label.textContent =
                city.name;


            label.style.position =
                "absolute";


            label.style.left =
                "13px";


            label.style.top =
                "-5px";


            label.style.whiteSpace =
                "nowrap";


            label.style.padding =
                "4px 7px 4px 8px";


            label.style.borderRadius =
                "1px";


            label.style.border =
                "1px solid rgba(45,55,45,.13)";


            label.style.background =
                "rgba(248,246,239,.94)";


            label.style.boxShadow =
                "0 2px 7px rgba(45,55,45,.10)";


            label.style.color =
                "#263026";


            label.style.fontFamily =
                "inherit";


            label.style.fontSize =
                "9px";


            label.style.lineHeight =
                "1.25";


            label.style.letterSpacing =
                ".08em";


            label.style.pointerEvents =
                "none";


            label.style.textShadow =
                "0 1px 0 rgba(255,255,255,.8)";


            label.style.transform =
                "rotate(" +
                (
                    (
                        city.x %
                        3
                    ) -
                    1
                ) *
                0.7 +
                "deg)";


            hotspot.appendChild(
                label
            );


            mapViewport.appendChild(
                hotspot
            );


            /*
               防止拖拽时触发地图
            */

            hotspot.addEventListener(
                "mousedown",
                function (event) {

                    event.stopPropagation();
                }
            );


            /*
               点击城市
            */

            hotspot.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    /*
                       第二次点击同一个城市：
                       直接退出。
                    */

                    if (
                        currentCity &&
                        currentCity.id ===
                        city.id &&
                        placePanel &&
                        placePanel.classList.contains(
                            "visible"
                        )
                    ) {

                        closeCityView();

                        return;
                    }


                    openCity(
                        city
                    );
                }
            );


            /*
               Hover
            */

            hotspot.addEventListener(
                "mouseenter",
                function () {

                    hotspot.style.transform =
                        "scale(1.18)";

                    hotspot.style.zIndex =
                        "80";

                    label.style.background =
                        "rgba(255,253,247,.99)";

                    label.style.fontWeight =
                        "600";
                }
            );


            hotspot.addEventListener(
                "mouseleave",
                function () {

                    hotspot.style.transform =
                        "scale(1)";

                    hotspot.style.zIndex =
                        "30";

                    label.style.background =
                        "rgba(248,246,239,.94)";

                    label.style.fontWeight =
                        "400";
                }
            );


            cityHotspots.push(
                {
                    city:
                        city,

                    element:
                        hotspot
                }
            );
        }
    );


    if (
        !hotspotAnimationStarted
    ) {

        hotspotAnimationStarted =
            true;


        updateAllCityHotspots();
    }
}


/* =====================================================
   城市点位置
===================================================== */

function updateAllCityHotspots() {

    cityHotspots.forEach(
        function (item) {

            const city =
                item.city;


            const hotspot =
                item.element;


            const size =
                14;


            hotspot.style.left =
                (
                    mapX +
                    city.x *
                    mapScale -
                    size / 2
                ) +
                "px";


            hotspot.style.top =
                (
                    mapY +
                    city.y *
                    mapScale -
                    size / 2
                ) +
                "px";
        }
    );


    requestAnimationFrame(
        updateAllCityHotspots
    );
}


/* =====================================================
   地图拖拽
===================================================== */

function setupDragging() {

    if (!mapViewport) {
        return;
    }


    mapViewport.addEventListener(
        "mousedown",
        function (event) {

            if (
                event.button !==
                0
            ) {

                return;
            }


            if (
                event.target.closest &&
                event.target.closest(
                    ".city-hotspot"
                )
            ) {

                return;
            }


            if (
                event.target.closest &&
                (
                    event.target.closest(
                        "#place-panel"
                    ) ||
                    event.target.closest(
                        "#memory-editor-overlay"
                    ) ||
                    event.target.closest(
                        "#memory-detail-page"
                    )
                )
            ) {

                return;
            }


            dragging =
                true;


            dragStartX =
                event.clientX;


            dragStartY =
                event.clientY;


            startMapX =
                mapX;


            startMapY =
                mapY;


            mapViewport.style.cursor =
                "grabbing";
        }
    );


    window.addEventListener(
        "mousemove",
        function (event) {

            if (!dragging) {
                return;
            }


            mapX =
                startMapX +
                (
                    event.clientX -
                    dragStartX
                );


            mapY =
                startMapY +
                (
                    event.clientY -
                    dragStartY
                );


            applyMapTransform();
        }
    );


    window.addEventListener(
        "mouseup",
        function () {

            if (!dragging) {
                return;
            }


            dragging =
                false;


            mapViewport.style.cursor =
                "grab";
        }
    );
}


/* =====================================================
   滚轮缩放
===================================================== */

function setupWheel() {

    if (!mapViewport) {
        return;
    }


    mapViewport.addEventListener(
        "wheel",
        function (event) {

            /*
               如果鼠标正在记忆框或者
               记忆详情页里，不能让地图缩放。
            */

            if (
                event.target.closest &&
                (
                    event.target.closest(
                        "#place-panel"
                    ) ||
                    event.target.closest(
                        "#memory-editor-overlay"
                    ) ||
                    event.target.closest(
                        "#memory-detail-page"
                    )
                )
            ) {

                return;
            }


            event.preventDefault();


            if (!mapImage) {
                return;
            }


            const rect =
                mapViewport.getBoundingClientRect();


            const mouseX =
                event.clientX -
                rect.left;


            const mouseY =
                event.clientY -
                rect.top;


            const oldScale =
                mapScale;


            const factor =
                event.deltaY < 0
                    ? 1.12
                    : 0.89;


            mapScale *=
                factor;


            const minScale =
                Math.min(
                    rect.width /
                    mapNaturalWidth,

                    rect.height /
                    mapNaturalHeight
                ) *
                0.55;


            const maxScale =
                5;


            mapScale =
                Math.max(
                    minScale,
                    Math.min(
                        maxScale,
                        mapScale
                    )
                );


            const scaleRatio =
                mapScale /
                oldScale;


            mapX =
                mouseX -
                (
                    mouseX -
                    mapX
                ) *
                scaleRatio;


            mapY =
                mouseY -
                (
                    mouseY -
                    mapY
                ) *
                scaleRatio;


            applyMapTransform();

        },
        {
            passive:
                false
        }
    );
}


/* =====================================================
   打开城市

   第一次点击：
   放大一次。

   再点击同一个城市：
   closeCityView()。

   因此不会无限放大。
===================================================== */

function openCity(city) {

    currentCity =
        city;


    if (placeTitle) {

        placeTitle.textContent =
            city.name;
    }


    if (placeLocation) {

        placeLocation.textContent =
            city.province +
            " / CHINA";
    }


    if (placeDescription) {

        placeDescription.textContent =
            city.description;
    }


    /*
       每次从完整地图进入一个城市，
       只进行一次放大。

       不再使用：
       mapScale * 2.8

       这样就不会重复点击无限增长。
    */

    const targetScale =
        Math.max(
            2,
            Math.min(
                2.65,
                mapScale *
                1.65
            )
        );


    const targetX =
        window.innerWidth *
        0.34 -
        city.x *
        targetScale;


    const targetY =
        window.innerHeight *
        0.50 -
        city.y *
        targetScale;


    animateMapTo(
        targetX,
        targetY,
        targetScale
    );


    renderMemoryLibrary(
        city
    );


    /*
       让记忆框保持在可视范围。
    */

    prepareMemoryPanel();


    if (placePanel) {

        setTimeout(
            function () {

                placePanel.classList.add(
                    "visible"
                );

            },
            350
        );
    }
}


/* =====================================================
   退出城市
===================================================== */

function closeCityView() {

    closeMemoryEditor();


    closeMemoryDetail();


    if (placePanel) {

        placePanel.classList.remove(
            "visible"
        );
    }


    currentCity =
        null;


    /*
       恢复到完整中国地图。
    */

    setTimeout(
        function () {

            resetMap();

        },
        50
    );
}


/* =====================================================
   地图动画
===================================================== */

function animateMapTo(
    targetX,
    targetY,
    targetScale
) {

    if (
        mapIsAnimating
    ) {

        /*
           如果正在动画，
           直接从当前状态继续。
        */
    }


    mapIsAnimating =
        true;


    const startX =
        mapX;


    const startY =
        mapY;


    const startScale =
        mapScale;


    const duration =
        850;


    const startTime =
        performance.now();


    function animate(
        currentTime
    ) {

        const elapsed =
            currentTime -
            startTime;


        const progress =
            Math.min(
                elapsed /
                duration,
                1
            );


        const eased =
            progress < 0.5
                ? 2 *
                    progress *
                    progress
                : 1 -
                    Math.pow(
                        -2 *
                        progress +
                        2,
                        2
                    ) /
                    2;


        mapX =
            startX +
            (
                targetX -
                startX
            ) *
            eased;


        mapY =
            startY +
            (
                targetY -
                startY
            ) *
            eased;


        mapScale =
            startScale +
            (
                targetScale -
                startScale
            ) *
            eased;


        applyMapTransform();


        if (
            progress <
            1
        ) {

            requestAnimationFrame(
                animate
            );

        } else {

            mapIsAnimating =
                false;
        }
    }


    requestAnimationFrame(
        animate
    );
}


/* =====================================================
   城市关闭按钮
===================================================== */

if (closePlace) {

    closePlace.addEventListener(
        "click",
        function () {

            closeCityView();

        }
    );
}


/* =====================================================
   让右侧记忆框可以滚动
===================================================== */

function prepareMemoryPanel() {

    if (!placePanel) {
        return;
    }


    /*
       不改变它原来的位置和宽度，
       只增加最大高度和滚动能力。
    */

    placePanel.style.maxHeight =
        "calc(100vh - 48px)";


    placePanel.style.overflowY =
        "auto";


    placePanel.style.overflowX =
        "hidden";


    placePanel.style.boxSizing =
        "border-box";


    /*
       鼠标在右侧面板滚动时，
       不再让地图跟着缩放。
    */

    placePanel.addEventListener(
        "wheel",
        function (event) {

            event.stopPropagation();

        },
        {
            passive:
                true
        }
    );
}


/* =====================================================
   返回首页
===================================================== */

if (backHome) {

    backHome.addEventListener(
        "click",
        function () {

            closeMemoryDetail();

            closeMemoryEditor();


            if (placePanel) {

                placePanel.classList.remove(
                    "visible"
                );
            }


            currentCity =
                null;


            if (mapPage) {

                mapPage.classList.remove(
                    "active"
                );

                mapPage.style.display =
                    "";

                mapPage.style.visibility =
                    "";

                mapPage.style.opacity =
                    "";

                mapPage.style.pointerEvents =
                    "";

                mapPage.style.transform =
                    "";

                mapPage.style.zIndex =
                    "";

                mapPage.style.position =
                    "";

                mapPage.style.left =
                    "";

                mapPage.style.top =
                    "";

                mapPage.style.width =
                    "";

                mapPage.style.height =
                    "";
            }


            if (homePage) {

                homePage.classList.add(
                    "active"
                );

                homePage.style.visibility =
                    "visible";

                homePage.style.pointerEvents =
                    "auto";
            }

        }
    );
}


/* =====================================================
   MEMORY STORAGE
===================================================== */

function memoryStorageKey(
    city
) {

    return (
        "lars_memories_" +
        city.id
    );
}


function getMemories(
    city
) {

    try {

        const raw =
            localStorage.getItem(
                memoryStorageKey(
                    city
                )
            );


        if (!raw) {
            return [];
        }


        const parsed =
            JSON.parse(
                raw
            );


        return Array.isArray(
            parsed
        )
            ? parsed
            : [];

    } catch (
        error
    ) {

        console.error(
            "读取记忆失败：",
            error
        );


        return [];
    }
}


function saveMemories(
    city,
    memories
) {

    localStorage.setItem(
        memoryStorageKey(
            city
        ),
        JSON.stringify(
            memories
        )
    );
}


/* =====================================================
   MEMORY LIBRARY
===================================================== */

function renderMemoryLibrary(
    city
) {

    if (
        !placePanel ||
        !city
    ) {

        return;
    }


    let library =
        placePanel.querySelector(
            "#memory-library"
        );


    if (!library) {

        library =
            document.createElement(
                "div"
            );


        library.id =
            "memory-library";


        library.style.marginTop =
            "28px";


        library.style.paddingTop =
            "18px";


        library.style.borderTop =
            "1px solid rgba(0,0,0,.12)";


        placePanel.appendChild(
            library
        );
    }


    const memories =
        getMemories(
            city
        );


    library.innerHTML =
        "";


    /*
       标题栏
    */

    const header =
        document.createElement(
            "div"
        );


    header.style.display =
        "flex";


    header.style.alignItems =
        "center";


    header.style.justifyContent =
        "space-between";


    header.style.gap =
        "12px";


    header.style.marginBottom =
        "16px";


    const heading =
        document.createElement(
            "div"
        );


    heading.textContent =
        "MEMORY LIBRARY";


    heading.style.fontSize =
        "10px";


    heading.style.letterSpacing =
        ".18em";


    heading.style.opacity =
        ".55";


    const addButton =
        document.createElement(
            "button"
        );


    addButton.type =
        "button";


    addButton.dataset.action =
        "add-memory";


    addButton.textContent =
        "+ ADD MEMORY";


    addButton.style.border =
        "0";


    addButton.style.background =
        "transparent";


    addButton.style.padding =
        "4px 0";


    addButton.style.cursor =
        "pointer";


    addButton.style.fontSize =
        "10px";


    addButton.style.letterSpacing =
        ".12em";


    header.appendChild(
        heading
    );


    header.appendChild(
        addButton
    );


    library.appendChild(
        header
    );


    /*
       真正的记忆列表。

       只让这里滚动，
       标题和 ADD MEMORY 不跟着消失。
    */

    const list =
        document.createElement(
            "div"
        );


    list.className =
        "memory-scroll-list";


    list.style.maxHeight =
        "52vh";


    list.style.overflowY =
        "auto";


    list.style.overflowX =
        "hidden";


    list.style.paddingRight =
        "8px";


    list.style.boxSizing =
        "border-box";


    list.style.scrollBehavior =
        "smooth";


    /*
       自定义滚动条
    */

    list.style.scrollbarWidth =
        "thin";


    library.appendChild(
        list
    );


    if (
        memories.length ===
        0
    ) {

        const empty =
            document.createElement(
                "div"
            );


        empty.textContent =
            "NO MEMORIES YET";


        empty.style.fontSize =
            "11px";


        empty.style.opacity =
            ".45";


        empty.style.padding =
            "8px 0";


        list.appendChild(
            empty
        );


        return;
    }


    /*
       每一条记忆
    */

    memories.forEach(
        function (
            memory,
            index
        ) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "memory-list-item";


            item.dataset.action =
                "open-memory-detail";


            item.dataset.memoryId =
                memory.id;


            item.style.padding =
                "12px 0";


            item.style.borderTop =
                index === 0
                    ? "0"
                    : "1px solid rgba(0,0,0,.08)";


            item.style.cursor =
                "pointer";


            item.style.transition =
                "opacity .2s ease";


            /*
               鼠标进入的时候稍微变化
            */

            item.addEventListener(
                "mouseenter",
                function () {

                    item.style.opacity =
                        ".62";
                }
            );


            item.addEventListener(
                "mouseleave",
                function () {

                    item.style.opacity =
                        "1";
                }
            );


            const top =
                document.createElement(
                    "div"
                );


            top.style.display =
                "flex";


            top.style.alignItems =
                "baseline";


            top.style.justifyContent =
                "space-between";


            top.style.gap =
                "10px";


            const title =
                document.createElement(
                    "div"
                );


            title.textContent =
                memory.title ||
                "UNTITLED MEMORY";


            title.style.fontSize =
                "13px";


            const number =
                document.createElement(
                    "div"
                );


            number.textContent =
                "MEMORY " +
                String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                );


            number.style.fontSize =
                "9px";


            number.style.letterSpacing =
                ".12em";


            number.style.opacity =
                ".45";


            top.appendChild(
                title
            );


            top.appendChild(
                number
            );


            const date =
                document.createElement(
                    "div"
                );


            date.textContent =
                memory.date ||
                "";


            date.style.fontSize =
                "10px";


            date.style.opacity =
                ".45";


            date.style.marginTop =
                "4px";


            const text =
                document.createElement(
                    "div"
                );


            /*
               列表页只显示部分正文。
               点击以后看完整内容。
            */

            const preview =
                memory.content ||
                "";


            text.textContent =
                preview.length >
                100
                    ? preview.slice(
                        0,
                        100
                    ) +
                    "…"
                    : preview;


            text.style.fontSize =
                "11px";


            text.style.lineHeight =
                "1.7";


            text.style.opacity =
                ".7";


            text.style.marginTop =
                "6px";


            text.style.whiteSpace =
                "pre-wrap";


            /*
               EDIT 保留。

               但 EDIT 点击不能触发
               打开记忆详情。
            */

            const edit =
                document.createElement(
                    "button"
                );


            edit.type =
                "button";


            edit.dataset.action =
                "edit-memory";


            edit.dataset.memoryId =
                memory.id;


            edit.textContent =
                "EDIT";


            edit.style.border =
                "0";


            edit.style.background =
                "transparent";


            edit.style.padding =
                "6px 0 0";


            edit.style.cursor =
                "pointer";


            edit.style.fontSize =
                "9px";


            edit.style.letterSpacing =
                ".12em";


            edit.style.opacity =
                ".6";


            edit.addEventListener(
                "click",
                function (
                    event
                ) {

                    event.stopPropagation();

                }
            );


            item.appendChild(
                top
            );


            item.appendChild(
                date
            );


            item.appendChild(
                text
            );


            item.appendChild(
                edit
            );


            list.appendChild(
                item
            );
        }
    );
}


/* =====================================================
   新的记忆详情页面

   不是浏览器真的跳转，
   而是在当前页面上生成一个独立的全屏页面。

   对用户来说就是：
   点击 MEMORY
   ↓
   进入新的页面
===================================================== */

function openMemoryDetail(
    city,
    memory
) {

    closeMemoryDetail();


    const page =
        document.createElement(
            "div"
        );


    page.id =
        "memory-detail-page";


    page.style.position =
        "fixed";


    page.style.inset =
        "0";


    page.style.zIndex =
        "2000";


    page.style.background =
        "#f8f7f2";


    page.style.color =
        "#263026";


    page.style.overflowY =
        "auto";


    page.style.overflowX =
        "hidden";


    page.style.boxSizing =
        "border-box";


    /*
       顶部返回
    */

    const top =
        document.createElement(
            "div"
        );


    top.style.position =
        "sticky";


    top.style.top =
        "0";


    top.style.zIndex =
        "10";


    top.style.display =
        "flex";


    top.style.alignItems =
        "center";


    top.style.justifyContent =
        "space-between";


    top.style.padding =
        "28px 42px";


    top.style.background =
        "rgba(248,247,242,.92)";


    top.style.backdropFilter =
        "blur(8px)";


    top.style.borderBottom =
        "1px solid rgba(38,48,38,.08)";


    const back =
        document.createElement(
            "button"
        );


    back.type =
        "button";


    back.dataset.action =
        "close-memory-detail";


    back.textContent =
        "← BACK";


    back.style.border =
        "0";


    back.style.background =
        "transparent";


    back.style.padding =
        "0";


    back.style.cursor =
        "pointer";


    back.style.fontSize =
        "10px";


    back.style.letterSpacing =
        ".14em";


    const location =
        document.createElement(
            "div"
        );


    location.textContent =
        city.name +
        " / " +
        city.province;


    location.style.fontSize =
        "9px";


    location.style.letterSpacing =
        ".16em";


    location.style.opacity =
        ".5";


    top.appendChild(
        back
    );


    top.appendChild(
        location
    );


    /*
       正文区域
    */

    const content =
        document.createElement(
            "article"
        );


    content.style.width =
        "min(760px, 82vw)";


    content.style.margin =
        "0 auto";


    content.style.padding =
        "100px 0 140px";


    const number =
        document.createElement(
            "div"
        );


    const memories =
        getMemories(
            city
        );


    const index =
        memories.findIndex(
            function (item) {

                return (
                    item.id ===
                    memory.id
                );
            }
        );


    number.textContent =
        "MEMORY " +
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    number.style.fontSize =
        "10px";


    number.style.letterSpacing =
        ".18em";


    number.style.opacity =
        ".42";


    const title =
        document.createElement(
            "h1"
        );


    title.textContent =
        memory.title ||
        "UNTITLED MEMORY";


    title.style.margin =
        "18px 0 10px";


    title.style.fontSize =
        "clamp(32px, 5vw, 64px)";


    title.style.fontWeight =
        "400";


    title.style.lineHeight =
        "1.08";


    title.style.letterSpacing =
        "-.025em";


    const date =
        document.createElement(
            "div"
        );


    date.textContent =
        memory.date ||
        "";


    date.style.fontSize =
        "11px";


    date.style.letterSpacing =
        ".1em";


    date.style.opacity =
        ".45";


    date.style.marginBottom =
        "70px";


    const divider =
        document.createElement(
            "div"
        );


    divider.style.width =
        "100%";


    divider.style.height =
        "1px";


    divider.style.background =
        "rgba(38,48,38,.12)";


    divider.style.marginBottom =
        "55px";


    const body =
        document.createElement(
            "div"
        );


    body.textContent =
        memory.content ||
        "";


    body.style.fontSize =
        "15px";


    body.style.lineHeight =
        "2.15";


    body.style.letterSpacing =
        ".02em";


    body.style.whiteSpace =
        "pre-wrap";


    body.style.wordBreak =
        "break-word";


    body.style.opacity =
        ".82";


    content.appendChild(
        number
    );


    content.appendChild(
        title
    );


    content.appendChild(
        date
    );


    content.appendChild(
        divider
    );


    content.appendChild(
        body
    );


    page.appendChild(
        top
    );


    page.appendChild(
        content
    );


    document.body.appendChild(
        page
    );


    /*
       新页面从顶部开始。
    */

    page.scrollTop =
        0;
}


/* =====================================================
   关闭记忆详情
===================================================== */

function closeMemoryDetail() {

    const page =
        document.querySelector(
            "#memory-detail-page"
        );


    if (page) {

        page.remove();
    }
}


/* =====================================================
   记忆编辑器
===================================================== */

function openMemoryEditor(
    city,
    memory
) {

    closeMemoryEditor();


    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "memory-editor-overlay";


    overlay.style.position =
        "fixed";


    overlay.style.inset =
        "0";


    overlay.style.zIndex =
        "3000";


    overlay.style.background =
        "rgba(255,255,255,.72)";


    overlay.style.display =
        "flex";


    overlay.style.alignItems =
        "center";


    overlay.style.justifyContent =
        "center";


    overlay.style.padding =
        "24px";


    const editor =
        document.createElement(
            "div"
        );


    editor.style.width =
        "min(560px, 92vw)";


    editor.style.maxHeight =
        "88vh";


    editor.style.overflowY =
        "auto";


    editor.style.background =
        "#fff";


    editor.style.padding =
        "28px";


    editor.style.boxSizing =
        "border-box";


    editor.style.border =
        "1px solid rgba(0,0,0,.12)";


    editor.style.boxShadow =
        "0 12px 40px rgba(0,0,0,.08)";


    const top =
        document.createElement(
            "div"
        );


    top.style.display =
        "flex";


    top.style.alignItems =
        "center";


    top.style.justifyContent =
        "space-between";


    top.style.marginBottom =
        "24px";


    const heading =
        document.createElement(
            "div"
        );


    heading.textContent =
        memory
            ? "EDIT MEMORY"
            : "ADD MEMORY";


    heading.style.fontSize =
        "12px";


    heading.style.letterSpacing =
        ".16em";


    const close =
        document.createElement(
            "button"
        );


    close.type =
        "button";


    close.dataset.action =
        "close-memory-editor";


    close.textContent =
        "×";


    close.style.border =
        "0";


    close.style.background =
        "transparent";


    close.style.fontSize =
        "24px";


    close.style.lineHeight =
        "1";


    close.style.cursor =
        "pointer";


    top.appendChild(
        heading
    );


    top.appendChild(
        close
    );


    const form =
        document.createElement(
            "form"
        );


    form.dataset.memoryForm =
        "true";


    form.dataset.cityId =
        city.id;


    form.dataset.memoryId =
        memory
            ? memory.id
            : "";


    addEditorField(
        form,
        "TITLE",
        "memory-title",
        memory
            ? memory.title
            : "",
        false
    );


    addEditorField(
        form,
        "DATE",
        "memory-date",
        memory
            ? memory.date
            : "",
        false
    );


    addEditorField(
        form,
        "CONTENT",
        "memory-content",
        memory
            ? memory.content
            : "",
        true
    );


    const actions =
        document.createElement(
            "div"
        );


    actions.style.display =
        "flex";


    actions.style.alignItems =
        "center";


    actions.style.justifyContent =
        "space-between";


    actions.style.gap =
        "16px";


    actions.style.marginTop =
        "22px";


    const left =
        document.createElement(
            "div"
        );


    if (memory) {

        const del =
            document.createElement(
                "button"
            );


        del.type =
            "button";


        del.dataset.action =
            "delete-memory";


        del.dataset.cityId =
            city.id;


        del.dataset.memoryId =
            memory.id;


        del.textContent =
            "DELETE";


        del.style.border =
            "0";


        del.style.background =
            "transparent";


        del.style.cursor =
            "pointer";


        del.style.fontSize =
            "10px";


        del.style.letterSpacing =
            ".12em";


        left.appendChild(
            del
        );
    }


    const right =
        document.createElement(
            "div"
        );


    right.style.display =
        "flex";


    right.style.gap =
        "14px";


    const cancel =
        document.createElement(
            "button"
        );


    cancel.type =
        "button";


    cancel.dataset.action =
        "close-memory-editor";


    cancel.textContent =
        "CANCEL";


    cancel.style.border =
        "0";


    cancel.style.background =
        "transparent";


    cancel.style.cursor =
        "pointer";


    cancel.style.fontSize =
        "10px";


    cancel.style.letterSpacing =
        ".12em";


    const save =
        document.createElement(
            "button"
        );


    save.type =
        "button";


    save.dataset.action =
        "save-memory";


    save.textContent =
        "SAVE";


    save.style.border =
        "1px solid rgba(0,0,0,.35)";


    save.style.background =
        "transparent";


    save.style.padding =
        "8px 16px";


    save.style.cursor =
        "pointer";


    save.style.fontSize =
        "10px";


    save.style.letterSpacing =
        ".12em";


    right.appendChild(
        cancel
    );


    right.appendChild(
        save
    );


    actions.appendChild(
        left
    );


    actions.appendChild(
        right
    );


    form.appendChild(
        actions
    );


    editor.appendChild(
        top
    );


    editor.appendChild(
        form
    );


    overlay.appendChild(
        editor
    );


    document.body.appendChild(
        overlay
    );


    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                overlay
            ) {

                closeMemoryEditor();
            }
        }
    );
}


/* =====================================================
   编辑器字段
===================================================== */

function addEditorField(
    form,
    labelText,
    name,
    value,
    textarea
) {

    const wrapper =
        document.createElement(
            "label"
        );


    wrapper.style.display =
        "block";


    wrapper.style.marginBottom =
        "16px";


    const label =
        document.createElement(
            "div"
        );


    label.textContent =
        labelText;


    label.style.fontSize =
        "9px";


    label.style.letterSpacing =
        ".14em";


    label.style.opacity =
        ".5";


    label.style.marginBottom =
        "7px";


    const input =
        textarea
            ? document.createElement(
                "textarea"
            )
            : document.createElement(
                "input"
            );


    input.name =
        name;


    input.value =
        value ||
        "";


    input.style.width =
        "100%";


    input.style.boxSizing =
        "border-box";


    input.style.border =
        "1px solid rgba(0,0,0,.15)";


    input.style.background =
        "transparent";


    input.style.padding =
        "10px";


    input.style.fontFamily =
        "inherit";


    input.style.fontSize =
        "13px";


    input.style.outline =
        "none";


    if (
        textarea
    ) {

        input.rows =
            8;


        input.style.resize =
            "vertical";


        input.style.lineHeight =
            "1.7";
    }


    wrapper.appendChild(
        label
    );


    wrapper.appendChild(
        input
    );


    form.appendChild(
        wrapper
    );
}


/* =====================================================
   关闭编辑器
===================================================== */

function closeMemoryEditor() {

    const overlay =
        document.querySelector(
            "#memory-editor-overlay"
        );


    if (overlay) {

        overlay.remove();
    }
}


/* =====================================================
   所有记忆按钮
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest
                ? event.target.closest(
                    "[data-action]"
                )
                : null;


        if (!button) {
            return;
        }


        const action =
            button.dataset.action;


        /* =================================================
           关闭详情页面
        ================================================= */

        if (
            action ===
            "close-memory-detail"
        ) {

            event.preventDefault();

            event.stopPropagation();

            closeMemoryDetail();

            return;
        }


        /* =================================================
           打开记忆详情
        ================================================= */

        if (
            action ===
            "open-memory-detail"
        ) {

            event.preventDefault();

            event.stopPropagation();


            if (!currentCity) {
                return;
            }


            const memories =
                getMemories(
                    currentCity
                );


            const memory =
                memories.find(
                    function (item) {

                        return (
                            item.id ===
                            button.dataset.memoryId
                        );
                    }
                );


            if (memory) {

                openMemoryDetail(
                    currentCity,
                    memory
                );
            }


            return;
        }


        /* =================================================
           关闭编辑器
        ================================================= */

        if (
            action ===
            "close-memory-editor"
        ) {

            event.preventDefault();

            event.stopPropagation();

            closeMemoryEditor();

            return;
        }


        /* =================================================
           ADD MEMORY
        ================================================= */

        if (
            action ===
            "add-memory"
        ) {

            event.preventDefault();

            event.stopPropagation();


            if (currentCity) {

                openMemoryEditor(
                    currentCity,
                    null
                );
            }


            return;
        }


        /* =================================================
           EDIT MEMORY
        ================================================= */

        if (
            action ===
            "edit-memory"
        ) {

            event.preventDefault();

            event.stopPropagation();


            if (!currentCity) {
                return;
            }


            const memories =
                getMemories(
                    currentCity
                );


            const memory =
                memories.find(
                    function (item) {

                        return (
                            item.id ===
                            button.dataset.memoryId
                        );
                    }
                );


            if (memory) {

                openMemoryEditor(
                    currentCity,
                    memory
                );
            }


            return;
        }


        /* =================================================
           SAVE MEMORY
        ================================================= */

        if (
            action ===
            "save-memory"
        ) {

            event.preventDefault();

            event.stopPropagation();


            const overlay =
                document.querySelector(
                    "#memory-editor-overlay"
                );


            const form =
                overlay
                    ? overlay.querySelector(
                        "form[data-memory-form]"
                    )
                    : null;


            if (!form) {
                return;
            }


            const titleInput =
                form.querySelector(
                    '[name="memory-title"]'
                );


            const dateInput =
                form.querySelector(
                    '[name="memory-date"]'
                );


            const contentInput =
                form.querySelector(
                    '[name="memory-content"]'
                );


            const title =
                titleInput.value.trim();


            const date =
                dateInput.value.trim();


            const content =
                contentInput.value.trim();


            if (
                !title &&
                !date &&
                !content
            ) {

                alert(
                    "至少填写一点记忆内容。"
                );

                return;
            }


            const city =
                cities.find(
                    function (item) {

                        return (
                            item.id ===
                            form.dataset.cityId
                        );
                    }
                );


            if (!city) {
                return;
            }


            const memories =
                getMemories(
                    city
                );


            const memoryId =
                form.dataset.memoryId;


            if (memoryId) {

                const index =
                    memories.findIndex(
                        function (item) {

                            return (
                                item.id ===
                                memoryId
                            );
                        }
                    );


                if (
                    index !==
                    -1
                ) {

                    memories[index] =
                        {
                            id:
                                memoryId,

                            title:
                                title,

                            date:
                                date,

                            content:
                                content
                        };
                }

            } else {

                memories.push(
                    {
                        id:
                            "memory-" +
                            Date.now(),

                        title:
                            title,

                        date:
                            date,

                        content:
                            content
                    }
                );
            }


            saveMemories(
                city,
                memories
            );


            closeMemoryEditor();


            currentCity =
                city;


            renderMemoryLibrary(
                city
            );


            return;
        }


        /* =================================================
           DELETE MEMORY
        ================================================= */

        if (
            action ===
            "delete-memory"
        ) {

            event.preventDefault();

            event.stopPropagation();


            const city =
                cities.find(
                    function (item) {

                        return (
                            item.id ===
                            button.dataset.cityId
                        );
                    }
                );


            if (!city) {
                return;
            }


            const confirmed =
                window.confirm(
                    "确定删除这条记忆吗？"
                );


            if (!confirmed) {
                return;
            }


            const memories =
                getMemories(
                    city
                ).filter(
                    function (item) {

                        return (
                            item.id !==
                            button.dataset.memoryId
                        );
                    }
                );


            saveMemories(
                city,
                memories
            );


            closeMemoryEditor();


            currentCity =
                city;


            renderMemoryLibrary(
                city
            );
        }

    },
    true
);


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            if (
                document.querySelector(
                    "#memory-detail-page"
                )
            ) {

                closeMemoryDetail();

                return;
            }


            closeMemoryEditor();
        }
    }
);


/* =====================================================
   窗口大小
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            mapPage &&
            mapPage.classList.contains(
                "active"
            )
        ) {

            /*
               如果正在城市页面，
               不改变当前城市状态。

               只在完整地图状态重新计算。
            */

            if (
                !currentCity
            ) {

                resetMap();
            }
        }
    }
);


/* =====================================================
   鸟形鼠标
   首页原行为保持不变
===================================================== */

const bird =
    document.querySelector(
        ".bird-cursor"
    );


if (bird) {

    document.addEventListener(
        "mousemove",
        function (event) {

            bird.style.left =
                event.clientX +
                "px";


            bird.style.top =
                event.clientY +
                "px";
        }
    );


    if (mapViewport) {

        mapViewport.addEventListener(
            "mouseenter",
            function () {

                bird.style.opacity =
                    "0.8";
            }
        );


        mapViewport.addEventListener(
            "mouseleave",
            function () {

                bird.style.opacity =
                    "0.55";
            }
        );
    }
}


/* =====================================================
   READY
===================================================== */

window.addEventListener(
    "load",
    function () {

        console.log(
            "LARS website ready"
        );
    }
);
