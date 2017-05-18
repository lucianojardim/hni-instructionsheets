import {Injectable} from '@angular/core';

import {Series} from '../../brand/series/series.model';
import {SerialNumber} from '../../serial-number/serial-number.model';
import {Basemodel} from '../../basemodel/basemodel.model';
import {InstructionSheet} from './instruction-sheet.model';
// TODO: make data changes persistent

@Injectable()
export class InstructionSheetService {
  private _instructionSheets: InstructionSheet[] = [
    {
      id: 1,
      name: 'Worksurface Bracket Insta',
      fileName: '42-0010.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-0010.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [1, 2],
      basemodelIdArray: [2958]
    },
    {
      id: 2,
      name: 'Mobile Pedestal',
      fileName: '42-2230.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2230.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [3, 4, 5, 6],
      basemodelIdArray: [416, 417, 418]
    },
    {
      id: 3,
      name: 'Electrical System',
      fileName: '42-2241.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/42-2241.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [7, 8],
      basemodelIdArray: [1311, 1312, 1313]
    },
    {
      id: 4,
      name: 'Worksurface Supports Inst',
      fileName: '42-2248.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/42-2248.pdf',
      seriesIdArray: [17, 57],
      serialNumberIdArray: [9],
      basemodelIdArray: [851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 959, 960, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3]
    },
    {
      id: 5,
      name: 'Cableway to Raceway Retro',
      fileName: '42-2249.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/42-2249.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [9],
      basemodelIdArray: [2328, 2329]
    },
    {
      id: 6,
      name: 'Keyboard Platform Install',
      fileName: '42-2287.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2287.pdf',
      seriesIdArray: [19, 23, 46, 47],
      serialNumberIdArray: [9],
      basemodelIdArray: [680]
    },
    {
      id: 7,
      name: 'Desk and Return',
      fileName: '42-2300.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2300.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [9],
      basemodelIdArray: [469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 491, 492, 493, 494, 495, 496, 497, 498]
    },
    {
      id: 8,
      name: 'Lateral File Cabinet Inst',
      fileName: '42-2306.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2306.pdf',
      seriesIdArray: [14, 25, 26, 32, 50],
      serialNumberIdArray: [9],
      basemodelIdArray: [534, 535, 540, 541, 542, 543, 544, 555, 556, 557, 558, 559, 560, 561, 562, 563, 566, 567, 568, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 652, 653, 654, 655, 658, 659, 660, 661, 662, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357]
    },
    {
      id: 9,
      name: 'Storage Cabinet Installat',
      fileName: '42-2311.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2311.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [9],
      basemodelIdArray: [2770, 2771, 2772]
    },
    {
      id: 10,
      name: 'Lateral File Installation',
      fileName: '42-2317.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2317.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [681, 682, 683, 684, 685, 686, 696, 697, 698, 699, 700, 701, 717, 718, 719, 720, 721, 722, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279]
    },
    {
      id: 11,
      name: 'Worksurface Supported Ped',
      fileName: '42-2328.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2328.pdf',
      seriesIdArray: [26, 29, 32, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 461, 462, 463, 464, 465, 466, 467, 468, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 3017, 3018, 3019, 3020]
    },
    {
      id: 12,
      name: 'Hanging Pedestal',
      fileName: '42-2330OBSOLETE.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2330OBSOLETE.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [408, 409, 410, 411, 412, 413]
    },
    {
      id: 13,
      name: 'Glide Tower Assembly',
      fileName: '42-2333.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2333.pdf',
      seriesIdArray: [19, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [451, 3017, 3018, 3019, 3020]
    },
    {
      id: 14,
      name: 'Glide Adjustment',
      fileName: '42-2336OBSOLETE.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2336OBSOLETE.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859]
    },
    {
      id: 15,
      name: 'Caster Assembly',
      fileName: '42-2337.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2337.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [12]
    },
    {
      id: 16,
      name: 'T-Base Assembly',
      fileName: '42-2351.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2351.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [2965, 2966]
    },
    {
      id: 17,
      name: 'Table Desk Assembly',
      fileName: '42-2360.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2360.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [499, 500, 501, 502, 504, 505, 506, 507, 508]
    },
    {
      id: 18,
      name: 'Corner Unit Assembly',
      fileName: '42-2361.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2361.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [503]
    },
    {
      id: 19,
      name: 'Peninsula Assembly',
      fileName: '42-2362.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2362.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [509, 510, 519]
    },
    {
      id: 20,
      name: 'Return Assembly',
      fileName: '42-2364.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2364.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [511, 512, 513, 514, 515, 516, 517, 518]
    },
    {
      id: 21,
      name: 'Personal File Center Inst',
      fileName: '42-2375.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2375.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279]
    },
    {
      id: 22,
      name: 'Personal Storage Tower In',
      fileName: '42-2376.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2376.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955]
    },
    {
      id: 23,
      name: 'Lateral Storage Unit Inst',
      fileName: '42-2379.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2379.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 2766, 2767, 2768, 2769]
    },
    {
      id: 24,
      name: 'Front-to-Rear Mounting Br',
      fileName: '42-2390.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2390.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [520]
    },
    {
      id: 25,
      name: 'Mobile Table Assembly',
      fileName: '42-2391.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2391.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2368]
    },
    {
      id: 26,
      name: 'Round and Square Table As',
      fileName: '42-2393.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2393.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2360, 2361, 2362]
    },
    {
      id: 27,
      name: 'Mobile Pedestal Handle In',
      fileName: '42-2398.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2398.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [2332]
    },
    {
      id: 28,
      name: 'Over File Assembly',
      fileName: '42-2440.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2440.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [],
      basemodelIdArray: [741, 742, 743]
    },
    {
      id: 29,
      name: 'Corner Sleeve',
      fileName: '42-2445.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2445.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [536]
    },
    {
      id: 30,
      name: 'Kickplate Installation',
      fileName: '42-2465.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2465.pdf',
      seriesIdArray: [19, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [1345, 1346, 1347, 2780]
    },
    {
      id: 31,
      name: 'Keyboard Platform Install',
      fileName: '42-2470.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2470.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [526, 527]
    },
    {
      id: 32,
      name: 'Desk and Return',
      fileName: '42-2538.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2538.pdf',
      seriesIdArray: [12, 19, 40, 41],
      serialNumberIdArray: [],
      basemodelIdArray: [453, 454, 455, 456, 457, 458, 459, 460, 645, 646, 647, 648, 649, 650, 651, 656, 657, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 950, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239]
    },
    {
      id: 33,
      name: 'Center Drawer Assembly',
      fileName: '42-2552.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2552.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [961, 962, 963]
    },
    {
      id: 34,
      name: 'Cam Lock Assembly',
      fileName: '42-2619.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2619.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [1247, 1248, 1249]
    },
    {
      id: 35,
      name: 'Shelf Adjustment',
      fileName: '42-2648.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2648.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [],
      basemodelIdArray: [2761, 2762, 2763, 2764, 2765]
    },
    {
      id: 36,
      name: 'Shelf File Installation',
      fileName: '42-2685.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/42-2685.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [],
      basemodelIdArray: [549, 550, 551, 552, 553, 554, 1343, 1344]
    },
    {
      id: 37,
      name: 'Counterweight Kit',
      fileName: '42-2730.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Contain/42-2730.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2773, 2774, 2775]
    },
    {
      id: 38,
      name: 'Cart',
      fileName: '42-5372.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5372.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [529]
    },
    {
      id: 39,
      name: 'Chair Assembly',
      fileName: '42-5390.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5390.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [1338, 1342]
    },
    {
      id: 40,
      name: 'Warning Label',
      fileName: '42-5369.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Warning%20Labels/42-5369.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [528]
    },
    {
      id: 41,
      name: 'Chair Assembly',
      fileName: '42-5453.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5453.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [547, 548]
    },
    {
      id: 42,
      name: 'Arm Assembly',
      fileName: '42-5577.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5577.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [],
      basemodelIdArray: [613]
    },
    {
      id: 43,
      name: 'Chair Assembly',
      fileName: '42-5585.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5585.pdf',
      seriesIdArray: [27, 53],
      serialNumberIdArray: [],
      basemodelIdArray: [521, 522, 523, 524, 545, 546]
    },
    {
      id: 44,
      name: 'Glide Assembly',
      fileName: '42-5604.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-5604.pdf',
      seriesIdArray: [44],
      serialNumberIdArray: [],
      basemodelIdArray: [531, 532]
    },
    {
      id: 45,
      name: 'Lounge Chair Arm Assembly',
      fileName: '42-9501.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9501.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2365, 2366]
    },
    {
      id: 46,
      name: 'Two-Way Ganging Connector',
      fileName: '42-9502.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9502.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2363]
    },
    {
      id: 47,
      name: 'Three-Way Ganging Connect',
      fileName: '42-9503.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9503.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2364]
    },
    {
      id: 48,
      name: 'Lounge Chair Pie Connecto',
      fileName: '42-9505.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9505.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2367]
    },
    {
      id: 49,
      name: 'Chair Ganging and Magazin',
      fileName: '42-9830.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9830.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [533]
    },
    {
      id: 50,
      name: 'Ganging Glide',
      fileName: '42-9950.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9950.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [528, 530]
    },
    {
      id: 51,
      name: 'Chair Cart Assembly',
      fileName: '42-9967.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/42-9967.pdf',
      seriesIdArray: [34],
      serialNumberIdArray: [],
      basemodelIdArray: [1280]
    },
    {
      id: 52,
      name: 'Keyboard Platform Install',
      fileName: '43-0166.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/43-0166.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [525, 964]
    },
    {
      id: 53,
      name: 'Hardwire Power In-Feed',
      fileName: '43-0179.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/43-0179.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [1309, 1310]
    },
    {
      id: 54,
      name: 'StationMaster Assembly',
      fileName: '43-0602.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/43-0602.pdf',
      seriesIdArray: [56],
      serialNumberIdArray: [],
      basemodelIdArray: [564, 565, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580]
    },
    {
      id: 55,
      name: 'Tack Board Installation',
      fileName: '43-0610.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/43-0610.pdf',
      seriesIdArray: [6, 7, 8, 16, 22, 23, 24, 46, 47, 58, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 1375, 1376, 1516, 1518, 1520, 1522, 1523, 1525, 1526, 1528, 3051, 3102, 3103, 3104, 3105, 3106]
    },
    {
      id: 56,
      name: 'Glide Installation',
      fileName: '46-0062.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/46-0062.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1750]
    },
    {
      id: 57,
      name: 'Chair Assembly',
      fileName: '46-1004.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1004.pdf',
      seriesIdArray: [21],
      serialNumberIdArray: [],
      basemodelIdArray: [452]
    },
    {
      id: 58,
      name: 'Chair Cart Assembly',
      fileName: '46-1008.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1008.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [3016]
    },
    {
      id: 59,
      name: 'Ganging Chair Installatio',
      fileName: '46-1042.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1042.pdf',
      seriesIdArray: [51],
      serialNumberIdArray: [],
      basemodelIdArray: [3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238]
    },
    {
      id: 60,
      name: 'Ganging In-Line Table Ins',
      fileName: '46-1043.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1043.pdf',
      seriesIdArray: [51],
      serialNumberIdArray: [],
      basemodelIdArray: [3227, 3228, 3229, 3230, 3231, 3232, 3236, 3237, 3238, 3239, 3240, 3241, 3243]
    },
    {
      id: 61,
      name: 'Ganging Corner Table Inst',
      fileName: '46-1044.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1044.pdf',
      seriesIdArray: [51],
      serialNumberIdArray: [],
      basemodelIdArray: [3227, 3228, 3229, 3242]
    },
    {
      id: 62,
      name: 'Fixed Arm Installation',
      fileName: '46-1050.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/46-1050.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [1334, 1335]
    },
    {
      id: 63,
      name: 'Warning Label',
      fileName: '56-0085.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/56-0085.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2990, 2991, 2992, 2993, 2994, 2995]
    },
    {
      id: 64,
      name: 'Swivel Tilt Control Instr',
      fileName: '56-0131.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0131.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [1336, 1337]
    },
    {
      id: 65,
      name: 'Synchro Tilt Control Inst',
      fileName: '56-0132.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0132.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [1338, 1339]
    },
    {
      id: 66,
      name: 'Synchro Tilt Control with',
      fileName: '56-0133.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0133.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [1340, 1341]
    },
    {
      id: 67,
      name: 'Overhead and Shelf Assemb',
      fileName: '56-0196.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/56-0196.pdf',
      seriesIdArray: [18],
      serialNumberIdArray: [],
      basemodelIdArray: [1093, 1094, 1095, 1096, 1097, 1098, 1099]
    },
    {
      id: 68,
      name: 'Lumbar Assembly',
      fileName: '56-0333.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0333.pdf',
      seriesIdArray: [54],
      serialNumberIdArray: [],
      basemodelIdArray: [2779]
    },
    {
      id: 69,
      name: 'Kickplate Installation',
      fileName: '56-0334.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Contain/56-0334.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2956, 2957]
    },
    {
      id: 70,
      name: 'Mobile Pedestal',
      fileName: '56-0336.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Contain/56-0336.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835]
    },
    {
      id: 71,
      name: 'Field Installable Top',
      fileName: '56-0337.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Contain/56-0337.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2781, 2782, 2783]
    },
    {
      id: 72,
      name: 'Hanging Pedestal',
      fileName: '56-0338.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/56-0338.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803]
    },
    {
      id: 73,
      name: 'Hutch Assembly',
      fileName: '56-0395.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/56-0395.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [485, 486, 487, 488]
    },
    {
      id: 74,
      name: 'Standing Height Pedestal',
      fileName: '56-0406.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0406.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1485, 1509]
    },
    {
      id: 75,
      name: 'Bookcase Assembly',
      fileName: '56-0408.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0408.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1483, 1484, 1507, 1508]
    },
    {
      id: 76,
      name: 'Raceway to Panel Foot Con',
      fileName: '56-0415.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/56-0415.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [2489]
    },
    {
      id: 77,
      name: 'Foot Platform Installatio',
      fileName: '56-0430.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0430.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1327]
    },
    {
      id: 78,
      name: 'Chair-to-Table Ganging',
      fileName: '56-0441.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0441.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1319]
    },
    {
      id: 79,
      name: 'Chair-to-Chair Ganging',
      fileName: '56-0442.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0442.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1320]
    },
    {
      id: 80,
      name: 'Back Installation',
      fileName: '56-0459.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/56-0459.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1321, 1322, 1323, 1324, 1325, 1326]
    },
    {
      id: 81,
      name: 'Wall Mount Open Shelf Ass',
      fileName: '56-0470.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0470.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [79, 80]
    },
    {
      id: 82,
      name: 'Mobile Table',
      fileName: '56-0471.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0471.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [198, 199]
    },
    {
      id: 83,
      name: 'Stack-On Cabinet Installa',
      fileName: '56-0472.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0472.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [44, 46, 48, 49]
    },
    {
      id: 84,
      name: 'Stack-On Cabinet with Tir',
      fileName: '56-0473.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0473.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [45]
    },
    {
      id: 85,
      name: 'Stack-On Cabinet with Cen',
      fileName: '56-0476.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0476.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [47]
    },
    {
      id: 86,
      name: 'Credenza Shell Assembly',
      fileName: '56-0477.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0477.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [97, 99, 101, 103]
    },
    {
      id: 87,
      name: 'Credenza Shell (Short Mod',
      fileName: '56-0478.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0478.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [98, 100, 102, 104]
    },
    {
      id: 88,
      name: 'Double High Stack-On Unit',
      fileName: '56-0636.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0636.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2056, 2057, 2058, 2060, 2061, 2062, 2071, 2072, 2073, 2087, 2088, 2089, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130]
    },
    {
      id: 89,
      name: 'Bridge Assembly',
      fileName: '56-0637.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0637.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1979, 1982]
    },
    {
      id: 90,
      name: 'Mobile Pedestal',
      fileName: '56-0638.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0638.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1936, 1937, 1938, 1939]
    },
    {
      id: 91,
      name: 'Worksurface Support/End P',
      fileName: '56-0640.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0640.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2140, 2141, 2142, 2143, 2144, 2145, 2148, 2149, 2150, 2151, 2154, 2155]
    },
    {
      id: 92,
      name: 'L-Shape End Panel Assembl',
      fileName: '56-0641.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0641.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170]
    },
    {
      id: 93,
      name: 'Reception Station Assembl',
      fileName: '56-0642.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0642.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2131, 2133]
    },
    {
      id: 94,
      name: 'Support Panel Installatio',
      fileName: '56-0643.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0643.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1897]
    },
    {
      id: 95,
      name: 'Collaborative Shelf',
      fileName: '56-0644.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/56-0644.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2135]
    },
    {
      id: 96,
      name: 'Teacher/Compact Assembly',
      fileName: '143-0099.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0099.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691]
    },
    {
      id: 97,
      name: 'Teacher Station Installat',
      fileName: '143-0100.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0100.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1692, 1693, 1694, 1695, 1696, 1697, 1698]
    },
    {
      id: 98,
      name: 'Accessory Packet',
      fileName: '143-0101.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0101.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1377, 1379, 1380, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393]
    },
    {
      id: 99,
      name: 'Student Desk Assembly',
      fileName: '143-0102.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0102.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1359, 1360, 1361]
    },
    {
      id: 100,
      name: 'Hang Rail Kit',
      fileName: '143-0103.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0103.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1378]
    },
    {
      id: 101,
      name: 'Cabinet Whiteboard Bracke',
      fileName: '143-0107.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-0107.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [1381]
    },
    {
      id: 102,
      name: 'Frame and Tile Panel Syst',
      fileName: '343-2270G.pdf',
      url: 'http://allsteel.hnicorp.com/sites/systems/ProductInfo/Instruction%20Sheets/343-2270G.pdf',
      seriesIdArray: [2],
      serialNumberIdArray: [],
      basemodelIdArray: [2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540]
    },
    {
      id: 103,
      name: 'Abound Installation Packe',
      fileName: '143-0118.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0118.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541]
    },
    {
      id: 104,
      name: 'Sliding Door Installation',
      fileName: '143-0133.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0133.pdf',
      seriesIdArray: [17, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [1328, 1329, 1330, 1331, 1332]
    },
    {
      id: 105,
      name: 'Frameless Glass Installat',
      fileName: '143-0160.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0160.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [2574, 2586, 2598, 2610, 2622, 2632, 2635, 2645, 2646, 2647, 2648, 2649, 2650, 2759]
    },
    {
      id: 106,
      name: 'T-Base Floor Mount Bracke',
      fileName: '143-0200.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0200.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [836]
    },
    {
      id: 107,
      name: 'Panel Support Bracket Ins',
      fileName: '143-0201.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0201.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [832]
    },
    {
      id: 108,
      name: 'Wall Connector',
      fileName: '143-0202.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0202.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [833]
    },
    {
      id: 109,
      name: 'Quick Connectors',
      fileName: '143-0203.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0203.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 834, 835]
    },
    {
      id: 110,
      name: 'Steel Bookshelf Installat',
      fileName: '143-0204.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Systems/143-0204.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [837, 838, 839, 840, 841, 842]
    },
    {
      id: 111,
      name: 'Glide Installation',
      fileName: '143-0500.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-0500.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1737, 1738, 1739, 1741]
    },
    {
      id: 112,
      name: '30" Open File Center Asse',
      fileName: '143-0501.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-0501.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1739]
    },
    {
      id: 113,
      name: 'Wall Rail System Installa',
      fileName: '143-1001.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Education/143-1001.pdf',
      seriesIdArray: [31, 52],
      serialNumberIdArray: [],
      basemodelIdArray: [1701, 1702, 1703, 1704, 1705, 1706, 1707]
    },
    {
      id: 114,
      name: '36" and 60" Overhead Asse',
      fileName: '143-1100.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1100.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1742, 1745]
    },
    {
      id: 115,
      name: '30" and 36" Stadium Assem',
      fileName: '143-1110.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1110.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1740, 1743]
    },
    {
      id: 116,
      name: 'Workwall with File Center',
      fileName: '143-1140.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1140.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1749]
    },
    {
      id: 117,
      name: 'Shelf and Tray Assembly',
      fileName: '143-1150.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1150.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1748]
    },
    {
      id: 118,
      name: 'Handle Installation',
      fileName: '143-1151.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1151.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1737, 1738, 1741, 1742, 1745]
    },
    {
      id: 119,
      name: '3-Leg Height Adjustable B',
      fileName: '143-1167.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Height%20Adjustable%20Tables/143-1167.pdf',
      seriesIdArray: [30],
      serialNumberIdArray: [],
      basemodelIdArray: [1318]
    },
    {
      id: 120,
      name: 'Worksurface Leg Installat',
      fileName: '143-1600.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1600.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1744, 1746]
    },
    {
      id: 121,
      name: 'Overhead Assembly Install',
      fileName: '143-1601.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/143-1601.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1747]
    },
    {
      id: 122,
      name: 'Bridge Assembly',
      fileName: '242-0001.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0001.pdf',
      seriesIdArray: [8, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [235, 236, 243, 244, 249, 253, 355, 356, 368, 369, 370]
    },
    {
      id: 123,
      name: 'Flush Height Return',
      fileName: '242-0002.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0002.pdf',
      seriesIdArray: [7, 8, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [172, 173, 174, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 391, 393]
    },
    {
      id: 124,
      name: 'Peninsula Assembly',
      fileName: '242-0009.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0009.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [211, 212]
    },
    {
      id: 125,
      name: 'Center Drawer Assembly',
      fileName: '242-0019.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0019.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [414, 415]
    },
    {
      id: 126,
      name: 'Door Hinge Adjustment',
      fileName: '242-0021.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0021.pdf',
      seriesIdArray: [16, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [756, 1405, 1407, 1409, 1411, 1416, 1420, 1425, 1464, 1473, 1607, 1609, 1611, 1614, 1617, 1620, 1623]
    },
    {
      id: 127,
      name: 'Flush Height Return',
      fileName: '242-0024.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0024.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [746, 747, 748, 749, 761]
    },
    {
      id: 128,
      name: 'Bridge Assembly',
      fileName: '242-0025.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0025.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [769]
    },
    {
      id: 129,
      name: 'Stack-On Bookcase',
      fileName: '242-0026.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0026.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [759]
    },
    {
      id: 130,
      name: 'Stack-On Unit Assembly',
      fileName: '242-0027.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0027.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [757, 758, 760]
    },
    {
      id: 131,
      name: 'Storage Cabinet Installat',
      fileName: '242-0042.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0042.pdf',
      seriesIdArray: [7, 8, 16, 24, 28, 46, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [36, 40, 41, 42, 43, 217, 220, 312, 317, 402, 403, 404, 405, 406, 407, 775, 1958, 1959, 1960, 1961, 1962, 1963, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 2319, 2320, 2321, 2322, 2323]
    },
    {
      id: 132,
      name: 'Stack-On Organizer',
      fileName: '242-0044.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0044.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [288]
    },
    {
      id: 133,
      name: 'Bridge Assembly',
      fileName: '242-0047.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0047.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [768]
    },
    {
      id: 134,
      name: 'Table Assembly',
      fileName: '242-0060.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0060.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [213]
    },
    {
      id: 135,
      name: 'Queen Anne Base Table Ins',
      fileName: '242-0065.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0065.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [744]
    },
    {
      id: 136,
      name: 'Corner Unit Assembly',
      fileName: '242-0082.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0082.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [277]
    },
    {
      id: 137,
      name: 'Stack-On Unit Installatio',
      fileName: '242-0090.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0090.pdf',
      seriesIdArray: [16, 22, 23, 28, 46, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [745, 1412, 1415, 1417, 1419, 1421, 1424, 1426, 1428, 2035, 2036, 2037, 2040, 2041, 2042, 2044, 2045, 2046, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2059, 2063, 2086, 2090, 2096, 2097, 2100, 2101, 2102, 2103, 2104, 2105, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2317, 2318, 2359, 3026, 3069]
    },
    {
      id: 138,
      name: 'Reception Station Assembl',
      fileName: '242-0101.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0101.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [776, 777]
    },
    {
      id: 139,
      name: 'Hangrail Installation',
      fileName: '242-0150.PDF',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Paoli%20Instruction%20Sheets/242-0150.PDF',
      seriesIdArray: [16, 24, 46, 58, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [290, 292, 296, 297, 298, 299, 386, 387, 388, 389, 390, 392, 402, 403, 404, 405, 746, 747, 748, 749, 761, 763, 764, 765, 766, 767, 770, 771, 772, 773, 774, 1466, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2314, 2315, 2335, 2336, 2337, 2338, 2339]
    },
    {
      id: 140,
      name: 'Lateral File Installation',
      fileName: '242-0152.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0152.pdf',
      seriesIdArray: [7, 8, 22, 23, 28, 46, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [19, 21, 108, 109, 110, 131, 148, 237, 238, 239, 240, 250, 251, 252, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1976, 1977, 1978, 2314, 2315, 3021, 3022, 3045, 3046, 3087, 3088]
    },
    {
      id: 141,
      name: 'Bridge Assembly',
      fileName: '242-0175.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-0175.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [3028, 3029, 3030, 3031, 3032, 3033]
    },
    {
      id: 142,
      name: 'Leveling Glides',
      fileName: '242-2500.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-2500.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1980, 1981, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 2029, 2031, 2032, 2033, 2043, 2065, 2066, 2067, 2068, 2069, 2070, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085]
    },
    {
      id: 143,
      name: 'Bookcase',
      fileName: '242-2515.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-2515.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [750, 751, 752, 754, 755]
    },
    {
      id: 144,
      name: 'Door Assembly',
      fileName: '242-3342.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-3342.pdf',
      seriesIdArray: [9],
      serialNumberIdArray: [],
      basemodelIdArray: [419, 420]
    },
    {
      id: 145,
      name: 'Bookcase Assembly',
      fileName: '242-6661.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6661.pdf',
      seriesIdArray: [11],
      serialNumberIdArray: [],
      basemodelIdArray: [427, 428, 429, 430, 431, 432]
    },
    {
      id: 146,
      name: 'Organizer Assembly',
      fileName: '242-6722.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6722.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [78, 81]
    },
    {
      id: 147,
      name: 'Occasional Table Assembly',
      fileName: '242-6910.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6910.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [624, 625, 626]
    },
    {
      id: 148,
      name: 'Peninsula Modesty Panel I',
      fileName: '242-6940.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6940.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [32]
    },
    {
      id: 149,
      name: 'Bookcase',
      fileName: '242-6941.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6941.pdf',
      seriesIdArray: [10],
      serialNumberIdArray: [],
      basemodelIdArray: [421, 422, 423, 424, 425, 426]
    },
    {
      id: 150,
      name: 'Stack-On Unit Assembly',
      fileName: '242-6942.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6942.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [324, 325, 326, 327]
    },
    {
      id: 151,
      name: 'Peninsula Assembly',
      fileName: '242-6943.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6943.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [24, 25, 26, 27, 28, 30, 31, 307, 308, 309, 310]
    },
    {
      id: 152,
      name: 'Lock Kit Installation',
      fileName: '242-6944.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-6944.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [289]
    },
    {
      id: 153,
      name: 'Modular Desk Assembly',
      fileName: '242-7046.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7046.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [795, 796, 797, 798]
    },
    {
      id: 154,
      name: '72" Peninsula Assembly',
      fileName: '242-7048.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7048.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [799]
    },
    {
      id: 155,
      name: 'Modular Credenza Assembly',
      fileName: '242-7067.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7067.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [800, 801]
    },
    {
      id: 156,
      name: 'Modular Return Assembly',
      fileName: '242-7069.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7069.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [802, 803]
    },
    {
      id: 157,
      name: '48" Bridge Assembly',
      fileName: '242-7071.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7071.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [804]
    },
    {
      id: 158,
      name: 'Full Length Pedestal',
      fileName: '242-7072.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7072.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [805, 806]
    },
    {
      id: 159,
      name: 'Stack-On Unit Assembly',
      fileName: '242-7075.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-7075.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [807, 808]
    },
    {
      id: 160,
      name: 'Modular Furniter Installa',
      fileName: '242-7088.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7088.pdf',
      seriesIdArray: [28, 46, 49],
      serialNumberIdArray: [],
      basemodelIdArray: [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2146, 2147, 2152, 2153, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2228, 2229, 2230, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2351, 2352, 2981, 2982, 2983, 2984, 2985]
    },
    {
      id: 161,
      name: 'Field Installable Grommet',
      fileName: '242-7120.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7120.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [1286]
    },
    {
      id: 162,
      name: 'Modular Desk Assembly',
      fileName: '242-7121.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7121.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [162, 164, 177, 179, 181, 183, 374, 375, 394, 396, 398, 399]
    },
    {
      id: 163,
      name: 'Modular Desk Assembly',
      fileName: '242-7122.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7122.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [93, 94, 95, 106, 132, 149, 151, 341, 359, 366, 367]
    },
    {
      id: 164,
      name: 'Return Installation',
      fileName: '242-7123.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7123.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [16, 17, 18, 20, 170, 171, 175, 176, 300, 301, 302, 304, 392]
    },
    {
      id: 165,
      name: 'Cockpit Corner Unit Assem',
      fileName: '242-7125.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7125.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [166, 167, 376, 377]
    },
    {
      id: 166,
      name: 'End Book Shelf Assembly',
      fileName: '242-7126.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7126.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [115]
    },
    {
      id: 167,
      name: 'Door Cabinet Assembly',
      fileName: '242-7128.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7128.pdf',
      seriesIdArray: [7, 8, 22, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [33, 34, 111, 112, 214, 215, 348, 3042]
    },
    {
      id: 168,
      name: 'Mobile Pedestal',
      fileName: '242-7129.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7129.pdf',
      seriesIdArray: [7, 46, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [13, 14, 15, 297, 298, 299, 2312, 2313]
    },
    {
      id: 169,
      name: 'Bridge Assembly',
      fileName: '242-7130.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7130.pdf',
      seriesIdArray: [6, 7],
      serialNumberIdArray: [],
      basemodelIdArray: [126, 127, 128, 153, 154, 155, 1374]
    },
    {
      id: 170,
      name: 'Glass Modesty Panel Insta',
      fileName: '242-7169.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7169.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [90, 91, 92]
    },
    {
      id: 171,
      name: 'Field Installable Drawer ',
      fileName: '242-7191.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7191.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [953, 954, 955, 956, 957, 958, 2959, 2960, 2961, 2962, 2963, 2964]
    },
    {
      id: 172,
      name: 'Paper Management Shelf As',
      fileName: '242-7193.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7193.pdf',
      seriesIdArray: [7, 8, 24, 46, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [1700]
    },
    {
      id: 173,
      name: 'Modular Short Leg Install',
      fileName: '242-7201.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7201.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [10, 11]
    },
    {
      id: 174,
      name: 'End Book Shelf Assembly',
      fileName: '242-7202.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7202.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [284]
    },
    {
      id: 175,
      name: 'Modular Return Assembly',
      fileName: '242-7220.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7220.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [129, 134, 136, 137, 357, 362, 363]
    },
    {
      id: 176,
      name: 'Access Strip',
      fileName: '242-7221.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7221.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [29]
    },
    {
      id: 177,
      name: 'Hanging Pedestal',
      fileName: '242-7222.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7222.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [1, 289]
    },
    {
      id: 178,
      name: 'Full Height Pedestal',
      fileName: '242-7223.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7223.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [2, 4, 8, 9, 290, 292]
    },
    {
      id: 179,
      name: 'Door Unit Assembly',
      fileName: '242-7224.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7224.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [6, 294]
    },
    {
      id: 180,
      name: 'Peninsula/Jetty/Boomerang',
      fileName: '242-7226.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7226.pdf',
      seriesIdArray: [28, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2030, 2034, 2064, 2091, 2092, 2093, 2094, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283]
    },
    {
      id: 181,
      name: 'Modular Desk Assembly',
      fileName: '242-7230.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7230.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [96, 340]
    },
    {
      id: 182,
      name: 'Modular Desk Assembly',
      fileName: '242-7231.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7231.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [105]
    },
    {
      id: 183,
      name: 'Modular Desk Assembly',
      fileName: '242-7232.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7232.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [107, 133]
    },
    {
      id: 184,
      name: 'Modular Desk Assembly',
      fileName: '242-7233.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7233.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [150, 152]
    },
    {
      id: 185,
      name: 'Peninsula Assembly',
      fileName: '242-7234.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7234.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [22, 23, 305, 306]
    },
    {
      id: 186,
      name: 'Modular Return with Brace',
      fileName: '242-7247.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7247.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [2353, 2354, 2355, 2356, 2357, 2358]
    },
    {
      id: 187,
      name: 'Modular Return Assembly',
      fileName: '242-7250.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7250.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [130, 138, 147]
    },
    {
      id: 188,
      name: 'Modular Return with Brace',
      fileName: '242-7252.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7252.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [140, 142, 144, 146]
    },
    {
      id: 189,
      name: 'Stack-On Unit Assembly',
      fileName: '242-7289.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7289.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [322, 323, 328]
    },
    {
      id: 190,
      name: 'End Cap Bookshelf Assembl',
      fileName: '242-7292.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7292.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [116, 350]
    },
    {
      id: 191,
      name: 'Wardrobe/Storage Cabinet ',
      fileName: '242-7293.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7293.pdf',
      seriesIdArray: [7, 8, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [37, 38, 39, 218, 219, 313, 314, 315]
    },
    {
      id: 192,
      name: 'Reception Station Assembl',
      fileName: '242-7294.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7294.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [156, 372]
    },
    {
      id: 193,
      name: 'Return Reception Station ',
      fileName: '242-7295.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7295.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [157, 158]
    },
    {
      id: 194,
      name: 'Extended Corner Unit Asse',
      fileName: '242-7297.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7297.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [168, 169, 378, 379]
    },
    {
      id: 195,
      name: 'Stack-On Unit Assembly',
      fileName: '242-7299.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7299.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [320, 321]
    },
    {
      id: 196,
      name: 'Credenza Assembly',
      fileName: '242-7390.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7390.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [346, 347]
    },
    {
      id: 197,
      name: 'Reception Station Assembl',
      fileName: '242-7396.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7396.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [254]
    },
    {
      id: 198,
      name: 'Reception Station Assembl',
      fileName: '242-7397.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7397.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [255, 256]
    },
    {
      id: 199,
      name: 'Lateral File Installation',
      fileName: '242-7399.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7399.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [312, 348, 358]
    },
    {
      id: 200,
      name: 'Lateral File Installation',
      fileName: '242-7405.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7405.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [303]
    },
    {
      id: 201,
      name: 'Stack-On Unit Assembly',
      fileName: '242-7416.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7416.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [226, 227, 228, 229]
    },
    {
      id: 202,
      name: 'Back Enclosure',
      fileName: '242-7417.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7417.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [230, 231, 232, 233, 234]
    },
    {
      id: 203,
      name: '"L" Workstation Stack-On ',
      fileName: '242-7418.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7418.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [223, 224]
    },
    {
      id: 204,
      name: 'Return Stack-On Unit Asse',
      fileName: '242-7421.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7421.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [221, 222]
    },
    {
      id: 205,
      name: 'Vertical Paper Management',
      fileName: '242-7437.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7437.pdf',
      seriesIdArray: [7, 8, 16, 46, 49, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [1699]
    },
    {
      id: 206,
      name: 'Hangrail Installation',
      fileName: '242-7440.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7440.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [296, 300, 301, 302, 304, 316, 318, 319, 342, 343, 344, 345, 360, 361, 371, 373, 380, 381, 382, 383, 384, 385, 395, 397]
    },
    {
      id: 207,
      name: 'Bridge Assembly',
      fileName: '242-7475.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7475.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [2294, 2295, 2296, 2297]
    },
    {
      id: 208,
      name: 'Warning Label',
      fileName: '242-7490.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Warning%20Labels/242-7490.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [73]
    },
    {
      id: 209,
      name: '30" Deep Modular Desk Ass',
      fileName: '242-7520.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7520.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [285, 286]
    },
    {
      id: 210,
      name: '36" Deep Modular Desk Ass',
      fileName: '242-7521.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7521.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [287]
    },
    {
      id: 211,
      name: '24" Deep Modular Credenza',
      fileName: '242-7522.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7522.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [278, 280, 282]
    },
    {
      id: 212,
      name: 'Modular Return Assembly',
      fileName: '242-7523.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7523.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [265, 267, 269, 271]
    },
    {
      id: 213,
      name: 'Keyboard Tray Assembly',
      fileName: '242-7526.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7526.pdf',
      seriesIdArray: [7, 8, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [113, 114, 241, 242, 349]
    },
    {
      id: 214,
      name: 'Lateral File Bookcase Ass',
      fileName: '242-7527.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7527.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [216]
    },
    {
      id: 215,
      name: 'Modular Return with Brace',
      fileName: '242-7528.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7528.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [257, 273]
    },
    {
      id: 216,
      name: 'Modular Return with Brace',
      fileName: '242-7529.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7529.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [259, 275]
    },
    {
      id: 217,
      name: 'Modular File Installation',
      fileName: '242-7650.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7650.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [3, 5, 291, 293]
    },
    {
      id: 218,
      name: 'Wall Unit Installation',
      fileName: '242-7651.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7651.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2038, 2039, 2047, 2048, 2098, 2099, 2106, 2107]
    },
    {
      id: 219,
      name: 'Wall Cabinet Installation',
      fileName: '242-7652.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7652.pdf',
      seriesIdArray: [7, 28, 46, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [82, 83, 84, 85, 86, 87, 88, 89, 332, 333, 334, 335, 336, 337, 338, 339, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309]
    },
    {
      id: 220,
      name: 'Printer Cart Assembly',
      fileName: '242-7666.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7666.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [135]
    },
    {
      id: 221,
      name: 'Modular Return with Brace',
      fileName: '242-7667.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7667.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [139, 141, 143, 145, 364, 365]
    },
    {
      id: 222,
      name: 'CPU Cabinet Assembly',
      fileName: '242-7668.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7668.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [7, 295]
    },
    {
      id: 223,
      name: 'End Book Shelf Assembly',
      fileName: '242-7669.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7669.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [117, 351]
    },
    {
      id: 224,
      name: 'Lateral File Bookcase Ass',
      fileName: '242-7670.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-7670.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [35, 311]
    },
    {
      id: 225,
      name: 'Corner Unit Assembly',
      fileName: '242-8000.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8000.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [8]
    },
    {
      id: 226,
      name: 'Adjustable Shelf',
      fileName: '242-8727.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-8727.pdf',
      seriesIdArray: [28, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [1957, 2316]
    },
    {
      id: 227,
      name: 'Modular Return Assembly',
      fileName: '242-8730.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-8730.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [261]
    },
    {
      id: 228,
      name: 'Modular Return Assembly',
      fileName: '242-8731.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-8731.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [263]
    },
    {
      id: 229,
      name: 'Occasional Table Assembly',
      fileName: '242-8849.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-8849.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [537, 538, 539]
    },
    {
      id: 230,
      name: 'Non-Locking to Locking Wa',
      fileName: '242-8880.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-8880.pdf',
      seriesIdArray: [7, 24],
      serialNumberIdArray: [],
      basemodelIdArray: [42, 43, 406, 407]
    },
    {
      id: 231,
      name: 'Modular Desk Assembly',
      fileName: '242-8881.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8881.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [843]
    },
    {
      id: 232,
      name: 'Modular Credenza Assembly',
      fileName: '242-8882.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8882.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [844]
    },
    {
      id: 233,
      name: 'Bridge Assembly',
      fileName: '242-8885.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8885.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [845]
    },
    {
      id: 234,
      name: 'Full Length Pedestal',
      fileName: '242-8886.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8886.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [846, 847, 850]
    },
    {
      id: 235,
      name: 'Modular File Installation',
      fileName: '242-8887.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8887.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [848]
    },
    {
      id: 236,
      name: 'Stack-On Unit Assembly',
      fileName: '242-8888.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-8888.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [849]
    },
    {
      id: 237,
      name: 'Reception Station Assembl',
      fileName: '242-9077.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-9077.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [809]
    },
    {
      id: 238,
      name: 'Reception Return Assembly',
      fileName: '242-9078.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-9078.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [810]
    },
    {
      id: 239,
      name: 'Modular Return with Brace',
      fileName: '242-9081.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9081.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [258, 260, 274, 276]
    },
    {
      id: 240,
      name: 'Modular Return Assembly',
      fileName: '242-9082.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9082.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [262, 264, 266, 268, 270, 272]
    },
    {
      id: 241,
      name: 'Modular Credenza Assembly',
      fileName: '242-9083.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9083.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [279, 281, 283]
    },
    {
      id: 242,
      name: 'Drawer Handle Installatio',
      fileName: '242-9087.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/basyx/242-9087.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [885, 886]
    },
    {
      id: 243,
      name: 'Stack-On Door Lock Instal',
      fileName: '242-9115.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9115.pdf',
      seriesIdArray: [7, 8, 16, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [54, 62, 66, 70, 222, 224, 225, 227, 229, 321, 323, 325, 758, 762]
    },
    {
      id: 244,
      name: 'Corner Shield',
      fileName: '242-9125.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9125.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [750, 751, 752, 753, 754, 755, 763, 764, 765, 766, 767, 770, 772, 773, 774]
    },
    {
      id: 245,
      name: 'Extended Corner Unit Asse',
      fileName: '242-9139.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9139.pdf',
      seriesIdArray: [28, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2136, 2137, 2138, 2139, 2347, 2348, 2349, 2350]
    },
    {
      id: 246,
      name: 'Organizer Assembly',
      fileName: '242-9140.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9140.pdf',
      seriesIdArray: [28, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [1935, 2310]
    },
    {
      id: 247,
      name: 'Reception Station Assembl',
      fileName: '242-9141.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9141.pdf',
      seriesIdArray: [28, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2132, 2134, 2311]
    },
    {
      id: 248,
      name: 'Wire Management Installat',
      fileName: '242-9143.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9143.pdf',
      seriesIdArray: [24, 37],
      serialNumberIdArray: [],
      basemodelIdArray: [3788, 3789, 3790, 3791]
    },
    {
      id: 249,
      name: 'Bookcase',
      fileName: '242-9175.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9175.pdf',
      seriesIdArray: [7, 8, 28, 58, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [122, 123, 124, 125, 245, 246, 247, 248, 352, 353, 354, 1401, 1402, 1403, 1901, 1902, 1903, 1904, 1905, 1964, 1965]
    },
    {
      id: 250,
      name: '"L" Workstation Stack-On ',
      fileName: '242-9218.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9218.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [762]
    },
    {
      id: 251,
      name: 'Flush Height Return',
      fileName: '242-9346.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9346.pdf',
      seriesIdArray: [23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2256, 2257, 2258, 2259, 2260, 2261, 3063, 3064, 3067, 3068]
    },
    {
      id: 252,
      name: 'Hanging Reception Unit As',
      fileName: '242-9429.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9429.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [161]
    },
    {
      id: 253,
      name: 'Peninsula Leg Column Retr',
      fileName: '242-9431.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9431.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [2284]
    },
    {
      id: 254,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9556.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9556.pdf',
      seriesIdArray: [7, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [56, 58, 60, 62, 64, 66, 68, 70, 72, 76, 329, 330, 331]
    },
    {
      id: 255,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9557.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9557.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [54]
    },
    {
      id: 256,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9558.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9558.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [50, 52]
    },
    {
      id: 257,
      name: '3" Grommet Installation',
      fileName: '242-9559.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9559.pdf',
      seriesIdArray: [19, 28],
      serialNumberIdArray: [],
      basemodelIdArray: [1287, 1288]
    },
    {
      id: 258,
      name: 'Modular Desk Assembly',
      fileName: '242-9560.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9560.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [163, 165, 178, 180, 182, 184]
    },
    {
      id: 259,
      name: 'Stack-On Ganging Panel As',
      fileName: '242-9561.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9561.pdf',
      seriesIdArray: [7, 28],
      serialNumberIdArray: [],
      basemodelIdArray: [74, 2095]
    },
    {
      id: 260,
      name: 'Field Installable Drawer ',
      fileName: '242-9563.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9563.pdf',
      seriesIdArray: [7, 8, 49, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [1366, 1367, 1368, 1369]
    },
    {
      id: 261,
      name: 'End Book Shelf Assembly',
      fileName: '242-9564.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9564.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [118, 119]
    },
    {
      id: 262,
      name: 'End Book Shelf Assembly',
      fileName: '242-9565.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9565.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [120, 121]
    },
    {
      id: 263,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9641.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9641.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [57, 61, 65, 69, 75]
    },
    {
      id: 264,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9643.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9643.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [51]
    },
    {
      id: 265,
      name: 'Removable Modesty Panel I',
      fileName: '242-9645.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9645.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [3023, 3024, 3025, 3027]
    },
    {
      id: 266,
      name: 'Modesty Panel Assembly',
      fileName: '242-9655.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9655.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [3061]
    },
    {
      id: 267,
      name: 'Reception Station Assembl',
      fileName: '242-9657.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9657.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2330]
    },
    {
      id: 268,
      name: 'Reception Station Return ',
      fileName: '242-9658.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9658.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2331]
    },
    {
      id: 269,
      name: 'Stack-On Unit Installatio',
      fileName: '242-9660.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9660.pdf',
      seriesIdArray: [22, 23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2250, 2251, 2252, 2253, 2254, 2255, 3047, 3048, 3049, 3050, 3056, 3057, 3058, 3059, 3060, 3096, 3097, 3098, 3099, 3100, 3101]
    },
    {
      id: 270,
      name: 'Bridge',
      fileName: '242-9661.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9661.pdf',
      seriesIdArray: [23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2240, 2241, 2242, 3070, 3072, 3073]
    },
    {
      id: 271,
      name: 'Peninsula Assembly',
      fileName: '242-9662.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9662.pdf',
      seriesIdArray: [22, 23],
      serialNumberIdArray: [],
      basemodelIdArray: [3036, 3077, 3078]
    },
    {
      id: 272,
      name: 'Video/Personal/Storage Ca',
      fileName: '242-9663.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9663.pdf',
      seriesIdArray: [22, 23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2249, 3043, 3044, 3084, 3085, 3086]
    },
    {
      id: 273,
      name: 'Bookcase',
      fileName: '242-9664.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9664.pdf',
      seriesIdArray: [22, 23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2244, 2245, 3034, 3035, 3037, 3038, 3079, 3080, 3081]
    },
    {
      id: 274,
      name: 'Bookcase Hutch',
      fileName: '242-9665.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9665.pdf',
      seriesIdArray: [22, 23, 46],
      serialNumberIdArray: [],
      basemodelIdArray: [2246, 2247, 2248, 3039, 3040, 3041, 3082, 3083]
    },
    {
      id: 275,
      name: 'Upper Bookcase',
      fileName: '242-9666.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9666.pdf',
      seriesIdArray: [23],
      serialNumberIdArray: [],
      basemodelIdArray: [3090, 3091, 3092, 3093, 3094, 3095]
    },
    {
      id: 276,
      name: 'Wall Cabinet Installation',
      fileName: '242-9667.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9667.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [3052, 3053, 3054, 3055]
    },
    {
      id: 277,
      name: 'Occasional Table Assembly',
      fileName: '242-9669.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9669.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [3062]
    },
    {
      id: 278,
      name: 'Cabinet Top',
      fileName: '242-9670.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9670.pdf',
      seriesIdArray: [23],
      serialNumberIdArray: [],
      basemodelIdArray: [3065, 3066, 3071, 3074, 3075, 3076, 3089]
    },
    {
      id: 279,
      name: '2-High Bookcase Assembly',
      fileName: '242-9681.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9681.pdf',
      seriesIdArray: [6],
      serialNumberIdArray: [],
      basemodelIdArray: [1370]
    },
    {
      id: 280,
      name: '5-High Bookcase Assembly',
      fileName: '242-9682.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9682.pdf',
      seriesIdArray: [6],
      serialNumberIdArray: [],
      basemodelIdArray: [1371]
    },
    {
      id: 281,
      name: 'Stack-On Unit Assembly',
      fileName: '242-9683.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9683.pdf',
      seriesIdArray: [6],
      serialNumberIdArray: [],
      basemodelIdArray: [1372, 1373]
    },
    {
      id: 282,
      name: 'Wall Cabinet Installation',
      fileName: '242-9797.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9797.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [2333, 2334]
    },
    {
      id: 283,
      name: 'Pull Installation',
      fileName: '242-9801.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9801.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1430, 1431, 1432, 1433, 1445, 1446, 1447, 1451, 1452, 1466, 1480, 1481, 1482, 1486, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1628, 1645, 1646, 1647, 1674, 1675]
    },
    {
      id: 284,
      name: 'Slab End Panel Assembly',
      fileName: '242-9802.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9802.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1438, 1468, 1499]
    },
    {
      id: 285,
      name: 'Bookcase Pedestal Assembl',
      fileName: '242-9803.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9803.pdf',
      seriesIdArray: [28, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1487, 1510, 1898, 1899, 1900]
    },
    {
      id: 286,
      name: 'Base Cabinet Installation',
      fileName: '242-9807.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9807.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [2262, 2263, 2264, 2265, 2324, 2325, 2326, 2327]
    },
    {
      id: 287,
      name: 'Overhead Panel Mount',
      fileName: '242-9808.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9808.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1538]
    },
    {
      id: 288,
      name: 'Laminate End Panel with B',
      fileName: '242-9809.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9809.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1469, 1470, 1500, 1501]
    },
    {
      id: 289,
      name: 'Mobile Pedestal',
      fileName: '242-9810.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9810.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1434, 1625]
    },
    {
      id: 290,
      name: 'Corner Bookcase Assembly',
      fileName: '242-9811.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9811.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1435]
    },
    {
      id: 291,
      name: 'Storage Cube',
      fileName: '242-9812.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9812.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1394]
    },
    {
      id: 292,
      name: 'LED Light Installation',
      fileName: '242-9813.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9813.pdf',
      seriesIdArray: [19, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1362, 1363, 1364, 1365]
    },
    {
      id: 293,
      name: 'Drawer Organizer',
      fileName: '242-9814.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9814.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1535]
    },
    {
      id: 294,
      name: 'Bridge/Return Assembly',
      fileName: '242-9815.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9815.pdf',
      seriesIdArray: [7, 28, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 1529, 1530, 1531, 1532, 1533, 1534, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227]
    },
    {
      id: 295,
      name: 'Laminate Modesty Panel In',
      fileName: '242-9817.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9817.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1488, 1489, 1511, 1512, 1513, 1514]
    },
    {
      id: 296,
      name: 'Above/Below Privacy Scree',
      fileName: '242-9818.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9818.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1490, 1491, 1492, 1493, 1494, 1495]
    },
    {
      id: 297,
      name: 'External Stiffener',
      fileName: '242-9819.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Metal%20Case%20Goods/242-9819.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1602, 1603, 1604, 1605]
    },
    {
      id: 298,
      name: 'Above Privacy Screen',
      fileName: '242-9820.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9820.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1395, 1396, 1397, 1398, 1399, 1400]
    },
    {
      id: 299,
      name: 'O-Leg Installation',
      fileName: '242-9821.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9821.pdf',
      seriesIdArray: [29, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1441, 1504, 1536, 1537, 2776, 2777, 2778]
    },
    {
      id: 300,
      name: 'Support Storage Installat',
      fileName: '242-9823.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9823.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1436, 1437, 1467, 1471, 1472, 1474, 1475, 1476, 1477, 1478, 1479, 1497, 1498, 1502, 1503, 1505, 1506, 1626, 1627, 1641, 1642, 1643, 1644, 1648, 1649]
    },
    {
      id: 301,
      name: 'Post Leg Installation',
      fileName: '242-9824.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9824.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1496]
    },
    {
      id: 302,
      name: 'Hutch O-Leg',
      fileName: '242-9825.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9825.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1515, 1519]
    },
    {
      id: 303,
      name: 'Hutch Shelf',
      fileName: '242-9826.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9826.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1517, 1521, 1524, 1527]
    },
    {
      id: 304,
      name: 'Sliding Door Installation',
      fileName: '242-9829.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9829.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1404, 1406, 1408, 1410, 1413, 1414, 1415, 1418, 1419, 1422, 1423, 1424, 1427, 1428, 1430, 1431, 1432, 1433, 1606, 1608, 1610, 1612, 1613, 1615, 1616, 1618, 1619, 1621, 1622, 1624]
    },
    {
      id: 305,
      name: '4-Wire Electrical System',
      fileName: '242-9830.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9830.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1708, 1713, 1714]
    },
    {
      id: 306,
      name: 'Wire Management Clip',
      fileName: '242-9831.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9831.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [3292, 3293]
    },
    {
      id: 307,
      name: 'Credenza Power Pack',
      fileName: '242-9832.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9832.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1439, 1440, 1710, 1711]
    },
    {
      id: 308,
      name: 'Shared Overhead Post Legs',
      fileName: '242-9846.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9846.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1429, 1465]
    },
    {
      id: 309,
      name: 'Shared Overhead Mounting ',
      fileName: '242-9847.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9847.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1539, 1540]
    },
    {
      id: 310,
      name: 'Small Credenza Installati',
      fileName: '242-9848.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/VOI/242-9848.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [1442, 1443, 1444, 1448, 1449, 1450]
    },
    {
      id: 311,
      name: 'Modular Reception Desk As',
      fileName: '242-9850.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9850.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [159]
    },
    {
      id: 312,
      name: 'Modular Reception Desk As',
      fileName: '242-9851.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9851.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [160]
    },
    {
      id: 313,
      name: 'Open Stack-On Unit Assemb',
      fileName: '242-9856.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9856.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [63, 67, 71, 77]
    },
    {
      id: 314,
      name: 'Open Stack-On Unit Assemb',
      fileName: '242-9857.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9857.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [55]
    },
    {
      id: 315,
      name: 'Open Stack-On Unit Assemb',
      fileName: '242-9858.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9858.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [53]
    },
    {
      id: 316,
      name: 'Open Stack-On Unit Assemb',
      fileName: '242-9859.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/242-9859.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [59]
    },
    {
      id: 317,
      name: 'Flipper Doors',
      fileName: '343-0141.PDF',
      url: 'http://allsteel.hnicorp.com/sites/systems/ProductInfo/Instruction%20Sheets/343-0141.PDF',
      seriesIdArray: [1],
      serialNumberIdArray: [],
      basemodelIdArray: [483, 484, 489, 490]
    },
    {
      id: 318,
      name: 'Electrical System',
      fileName: '343-0477.pdf',
      url: 'http://allsteel.hnicorp.com/sites/systems/ProductInfo/Instruction%20Sheets/343-0477.pdf',
      seriesIdArray: [5],
      serialNumberIdArray: [],
      basemodelIdArray: [1314, 1315, 1316, 1317]
    },
    {
      id: 319,
      name: 'Tile Grommet Kit',
      fileName: '343-1101.pdf',
      url: 'http://allsteel.hnicorp.com/sites/systems/ProductInfo/Instruction%20Sheets/343-1101.pdf',
      seriesIdArray: [4],
      serialNumberIdArray: [],
      basemodelIdArray: [1333]
    },
    {
      id: 320,
      name: 'Panel System Installation',
      fileName: '3430389000.pdf',
      url: 'http://allsteel.hnicorp.com/sites/systems/ProductInfo/Instruction%20Sheets/3430389000.pdf',
      seriesIdArray: [3],
      serialNumberIdArray: [],
      basemodelIdArray: [965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 115]
    },
    {
      id: 321,
      name: 'Wall Cabinet Installation',
      fileName: '664-0018.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0018.pdf',
      seriesIdArray: [7, 46, 49, 58],
      serialNumberIdArray: [],
      basemodelIdArray: [185, 400, 401, 2243, 3007]
    },
    {
      id: 322,
      name: 'Laminate X-Base Installat',
      fileName: '664-0028.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0028.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [811]
    },
    {
      id: 323,
      name: 'Base Assembly',
      fileName: '664-0057.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0057.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [4032, 4033]
    },
    {
      id: 324,
      name: 'Base Assembly',
      fileName: '664-0058.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0058.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [791]
    },
    {
      id: 325,
      name: 'Base Assembly',
      fileName: '664-0059.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0059.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [792, 793, 794]
    },
    {
      id: 326,
      name: 'Base Assembly',
      fileName: '664-0060.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0060.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [788, 789, 790]
    },
    {
      id: 327,
      name: 'Activity Table Assembly',
      fileName: '664-0075.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0075.pdf',
      seriesIdArray: [20],
      serialNumberIdArray: [],
      basemodelIdArray: [1123, 1124]
    },
    {
      id: 328,
      name: '4-Trac Wire Harness Assem',
      fileName: '664-0131.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0131.pdf',
      seriesIdArray: [37, 49, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1715, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726]
    },
    {
      id: 329,
      name: '4-Track Wire Wall Plate I',
      fileName: '664-0132.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-0132.pdf',
      seriesIdArray: [37, 49],
      serialNumberIdArray: [],
      basemodelIdArray: [1709, 1716]
    },
    {
      id: 330,
      name: 'Credenza Installation',
      fileName: '664-0196.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0196.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2979, 2980, 3000, 3001]
    },
    {
      id: 331,
      name: 'Book Box Installation',
      fileName: '664-0204.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Seating/664-0204.pdf',
      seriesIdArray: [19, 52],
      serialNumberIdArray: [],
      basemodelIdArray: [951, 952, 1358]
    },
    {
      id: 332,
      name: 'Base to Table Assembly',
      fileName: '664-0240.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0240.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1281, 1282, 1283, 1284, 1285, 1290, 1291, 1292, 1293, 1294, 1306, 1307, 1308]
    },
    {
      id: 333,
      name: 'Tablet Accessory Installa',
      fileName: '664-0241.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0241.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1305]
    },
    {
      id: 334,
      name: 'Leg Installation',
      fileName: '664-0243.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0243.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1281, 1282, 1283, 1284, 1285, 1290, 1291, 1292, 1293, 1294, 1306, 1307, 1308]
    },
    {
      id: 335,
      name: 'Table Lamp Installation',
      fileName: '664-0246.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0246.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1250]
    },
    {
      id: 336,
      name: 'Lamp Shade Installation',
      fileName: '664-0247.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0247.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1251]
    },
    {
      id: 337,
      name: 'Ganging Bracket',
      fileName: '664-0248.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0248.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1289]
    },
    {
      id: 338,
      name: 'Personal Table Assembly',
      fileName: '664-0249.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/FLOCK/664-0249.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [1303, 1304]
    },
    {
      id: 339,
      name: 'Lectern Installation',
      fileName: '664-0352.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0352.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [3003]
    },
    {
      id: 340,
      name: 'Contemporary Base Install',
      fileName: '664-0354.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0354.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2988, 2989]
    },
    {
      id: 341,
      name: 'Veneer Panel Base Install',
      fileName: '664-0356.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0356.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2997, 2998, 2999, 3004, 3005, 3006, 3014, 3015]
    },
    {
      id: 342,
      name: 'Hollow Base Installation',
      fileName: '664-0358.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0358.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2996, 3002, 3011, 3012]
    },
    {
      id: 343,
      name: 'Cube Base Installation',
      fileName: '664-0360.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0360.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2987, 3013]
    },
    {
      id: 344,
      name: 'Cylinder Base Installatio',
      fileName: '664-0362.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Preside/664-0362.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [2986, 3008, 3009, 3010]
    },
    {
      id: 345,
      name: 'Fixed and Adjustable Leg ',
      fileName: '664-1200.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1200.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1760, 1762, 1764, 1766, 1768, 1783, 1785, 1787, 1788, 1790, 1792, 1794, 1795, 1797, 1799, 1801, 1802, 1804, 1805, 1807, 1808, 1810, 1812, 1814, 1815, 1817, 1818, 1820, 1822, 1824, 1825, 1827, 1828, 1830, 1832, 1834, 1835, 1837, 1839, 1841, 1842, 1844, 1845, 1847, 1849, 1851, 1852, 1854, 1855, 1857, 1859, 1861, 1862, 1864, 1865, 1867, 1869, 1871, 1872, 1874, 1876, 1878, 1879, 1881, 1882, 1884, 1885, 1887, 1889, 1891, 1893, 1895]
    },
    {
      id: 346,
      name: 'Folding Leg Installation',
      fileName: '664-1202.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1202.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1784, 1791, 1798, 1811, 1821, 1831, 1848, 1858, 1868]
    },
    {
      id: 347,
      name: 'Nesting Leg Installation',
      fileName: '664-1203.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1203.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1761, 1763, 1765, 1767, 1769, 1786, 1789, 1793, 1796, 1800, 1803, 1806, 1809, 1813, 1816, 1819, 1823, 1826, 1829, 1833, 1836, 1838, 1840, 1843, 1846, 1850, 1853, 1856, 1860, 1863, 1866, 1870, 1873, 1875, 1877, 1880, 1883, 1886, 1888, 1890, 1892, 1894, 1896]
    },
    {
      id: 348,
      name: 'Presentation Cart Assembl',
      fileName: '664-1205.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1205.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782]
    },
    {
      id: 349,
      name: 'Whiteboard Installation',
      fileName: '664-1206.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1206.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1770, 1771]
    },
    {
      id: 350,
      name: 'Modesty Panel Installatio',
      fileName: '664-1210.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Motivate/664-1210.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1772, 1773]
    },
    {
      id: 351,
      name: 'Table Assembly',
      fileName: '664-2000.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-2000.pdf',
      seriesIdArray: [37],
      serialNumberIdArray: [],
      basemodelIdArray: [1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736]
    },
    {
      id: 352,
      name: 'Ganging Hardware Installa',
      fileName: '664-2001.pdf',
      url: 'http://hon.hnicorp.com/sites/operations/Quality/Instructions/Shared%20Documents/Wood%20Case%20Goods%20and%20Tables/664-2001.pdf',
      seriesIdArray: [37],
      serialNumberIdArray: [10],
      basemodelIdArray: [1712]
    }, // Added 10 to test serial-number reader
  ];

  constructor() {
  }

  getInstructionSheetsByIds(instructionSheetIds: number[]): InstructionSheet[] {
    const result: InstructionSheet[] = [];
    const arrayLength: number = instructionSheetIds.length;
    for (let i = 0; i < arrayLength; i++) {
      result.push(this.getInstructionSheetsById(instructionSheetIds[i]));
    }
    return result;
  }

  getInstructionSheetsById(id: number): InstructionSheet {
    return this._instructionSheets.find((instructionSheet: InstructionSheet) => instructionSheet.id === id);
  }

  getInstructionSheetsBySeries(series: Series): InstructionSheet[] {
    return this.getInstructionSheetsBySeriesId(series.id);
  }
  getInstructionSheetsBySeriesId(seriesId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.seriesIdArray.find(
          (element: number) =>
          element === seriesId
        )
    );
  }

  getInstructionSheetsBySerialNumber(serialNumber: SerialNumber): InstructionSheet[] {
    return this.getInstructionSheetsBySerialNumberId(serialNumber.id);
  }

  getInstructionSheetsBySerialNumberId(serialNumberId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.serialNumberIdArray.find(
          (element: number) =>
          element === serialNumberId
        )
    );
  }

  getInstructionSheetsByBasemodel(basemodel: Basemodel): InstructionSheet[] {
    return this.getInstructionSheetsByBasemodelId(basemodel.id);
  }

  getInstructionSheetsByBasemodelId(basemodelId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.basemodelIdArray.find(
          (element: number) =>
          element === basemodelId
        )
    );
  }
}
