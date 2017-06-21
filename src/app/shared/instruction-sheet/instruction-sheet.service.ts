import {Injectable} from '@angular/core';

import {Series} from '../../brand/series/series.model';
import {SerialNumber} from '../../serial-number/serial-number.model';
import {Basemodel} from '../../basemodel/basemodel.model';
import {InstructionSheet} from './instruction-sheet.model';

@Injectable()
export class InstructionSheetService {
  private _instructionSheets: InstructionSheet[] = [
    {
      id: 1,
      name: '"L" Workstation Stack-On Unit',
      fileName: '242-7418.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7418.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [1],
      basemodelIdArray: [1085, 1086]
    },
    {
      id: 2,
      name: '"L" Workstation Stack-On Unit',
      fileName: '242-9218.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9218.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1624]
    },
    {
      id: 3,
      name: '2-High Bookcase',
      fileName: '242-9681.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9681.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [1],
      basemodelIdArray: [2304]
    },
    {
      id: 4,
      name: '22" Round Base Assembly',
      fileName: '664-0058.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0058.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [1],
      basemodelIdArray: [1669]
    },
    {
      id: 5,
      name: '24" Deep Modular Credenza',
      fileName: '242-7522.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7522.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1140, 1142, 1144]
    },
    {
      id: 6,
      name: '28" Round Base Assembly',
      fileName: '664-0059.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0059.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [1670, 1671, 1672]
    },
    {
      id: 7,
      name: '3" Grommet Installation',
      fileName: '242-9559.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9559.pdf',
      seriesIdArray: [29, 38],
      serialNumberIdArray: [2],
      basemodelIdArray: [2220, 2221]
    },
    {
      id: 8,
      name: '3-Leg Height Adjustable Base',
      fileName: '143-1167.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Height%20Adjustable%20Tables/143-1167.pdf',
      seriesIdArray: [40],
      serialNumberIdArray: [],
      basemodelIdArray: [2251]
    },
    {
      id: 9,
      name: '30" and 36" Stadium',
      fileName: '143-1110.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1110.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2674, 2677]
    },
    {
      id: 10,
      name: '30" D Rectangle Top Desk Shell',
      fileName: '242-7121.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7121.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1024, 1026, 1039, 1041, 1043, 1045, 1236, 1237, 1256, 1258, 1260, 1261]
    },
    {
      id: 11,
      name: '30" Deep Modular Desk',
      fileName: '242-7520.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7520.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1147, 1148]
    },
    {
      id: 12,
      name: '30" Open File Center',
      fileName: '143-0501.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-0501.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2673]
    },
    {
      id: 13,
      name: '36" and 60" Overhead',
      fileName: '143-1100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1100.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2676, 2679]
    },
    {
      id: 14,
      name: '36" Deep Modular Desk',
      fileName: '242-7521.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7521.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1149]
    },
    {
      id: 15,
      name: '36" W LH Modular Return (Full Skirt)',
      fileName: '242-8731.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8731.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1125]
    },
    {
      id: 16,
      name: '36" W Open Stack-On Unit',
      fileName: '242-9858.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9858.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [915]
    },
    {
      id: 17,
      name: '36" W RH Modular Return (Full Skirt)',
      fileName: '242-8730.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8730.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1123]
    },
    {
      id: 18,
      name: '4-Trac Wire Harness',
      fileName: '664-0131.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0131.pdf',
      seriesIdArray: [59, 47, 70],
      serialNumberIdArray: [2],
      basemodelIdArray: [2649, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660]
    },
    {
      id: 19,
      name: '4-Track Wire Wall Plate',
      fileName: '664-0132.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0132.pdf',
      seriesIdArray: [47, 59],
      serialNumberIdArray: [],
      basemodelIdArray: [2643, 2650]
    },
    {
      id: 20,
      name: '4-Wire Electrical System',
      fileName: '242-9830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9830.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2642, 2647, 2648]
    },
    {
      id: 21,
      name: '42" W Open Stack-On Unit',
      fileName: '242-9857.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9857.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [917]
    },
    {
      id: 22,
      name: '42"-48" W Modular Desk (10" Skirt)',
      fileName: '242-7233.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7233.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1012, 1014]
    },
    {
      id: 23,
      name: '48" Bridge',
      fileName: '242-7071.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7071.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [2],
      basemodelIdArray: [1682]
    },
    {
      id: 24,
      name: '48" W Open Stack-On Unit',
      fileName: '242-9859.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9859.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [921]
    },
    {
      id: 25,
      name: '5-High Bookcase',
      fileName: '242-9682.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9682.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [],
      basemodelIdArray: [2305]
    },
    {
      id: 26,
      name: '60"-72" W Modular Desk',
      fileName: '242-9560.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9560.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1025, 1027, 1040, 1042, 1044, 1046]
    },
    {
      id: 27,
      name: '60"-78" W Open Stack-On Unit',
      fileName: '242-9856.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9856.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [925, 929, 933, 939]
    },
    {
      id: 28,
      name: '72" Peninsula',
      fileName: '242-7048.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7048.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1677]
    },
    {
      id: 29,
      name: '72" Rectangle Desk Shell',
      fileName: '242-7046.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7046.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1673, 1674, 1675, 1676]
    },
    {
      id: 30,
      name: 'Abode Packet',
      fileName: '56-0421.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0421.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [],
      basemodelIdArray: [3833, 3834, 3835, 3836, 3837, 3838, 3839, 3840, 3841, 3842, 3843, 3844, 3845, 3846, 3847, 3848, 3849, 3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860, 3861, 3862, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871, 3872, 3873, 3874, 3875]
    },
    {
      id: 31,
      name: 'Above Privacy Screen',
      fileName: '242-9820.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9820.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2329, 2330, 2331, 2332, 2333, 2334]
    },
    {
      id: 32,
      name: 'Above/Below Privacy Screen',
      fileName: '242-9818.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9818.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2424, 2425, 2426, 2427, 2428, 2429]
    },
    {
      id: 33,
      name: 'Access Strip',
      fileName: '242-7221.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7221.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [891]
    },
    {
      id: 34,
      name: 'Accessory Packet',
      fileName: '143-0101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0101.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2311, 2313, 2314, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327]
    },
    {
      id: 35,
      name: 'Activity Table',
      fileName: '664-0075.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0075.pdf',
      seriesIdArray: [30],
      serialNumberIdArray: [],
      basemodelIdArray: [2047, 2048]
    },
    {
      id: 36,
      name: 'Adept Packet',
      fileName: '343-1861.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1861.pdf',
      seriesIdArray: [1],
      serialNumberIdArray: [],
      basemodelIdArray: [232, 233, 234, 235, 236, 237, 242, 243, 256, 279, 280, 281, 282, 283, 284, 285, 501, 502, 503, 504, 505, 506, 507, 778, 779, 780, 781, 782, 783, 784, 790, 791, 8544, 8545, 8546, 8698, 8699, 8700]
    },
    {
      id: 37,
      name: 'Adjustable Shelf',
      fileName: '242-8727.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8727.pdf',
      seriesIdArray: [38, 56],
      serialNumberIdArray: [],
      basemodelIdArray: [2891, 3250]
    },
    {
      id: 38,
      name: 'Align Packet',
      fileName: '343-1555.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1555.pdf',
      seriesIdArray: [2],
      serialNumberIdArray: [],
      basemodelIdArray: [861, 862, 7902, 7903, 7904, 7914, 7915, 7923, 7924, 7926, 9661, 9662, 9663, 9664, 9665, 9666, 9694, 9695, 9696, 9697, 9698, 9699, 9700, 9701, 9702, 9703, 9704, 9705, 9706, 9707, 9708, 9709, 9710, 9711, 9712, 9713, 9714, 9715, 9716, 9717, 9718, 9719, 9720, 9721, 9722, 9723, 9724, 9725, 9726, 9727, 9728, 9729, 9730, 9731, 9732, 9733, 9734, 9735, 9736, 9737, 9738, 9739, 9740, 9741, 9742, 9743, 9744, 9745, 9746, 9747]
    },
    {
      id: 39,
      name: 'Approach Packet',
      fileName: '3430394200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430394200.pdf',
      seriesIdArray: [3],
      serialNumberIdArray: [],
      basemodelIdArray: [9459, 9460, 9461, 9462, 9463, 9464, 9465, 9466, 9467, 9468, 9469, 9470, 9471, 9472, 9473, 9474, 9475, 9476, 9477, 9478, 9479, 9480, 9481, 9482, 9483, 9484, 9485, 9486, 9487, 9488, 9489, 9490, 9491, 9492, 9493, 9494, 9495, 9496, 9497, 9498, 9499, 9500, 9501, 9502, 9503, 9504, 9505, 9506, 9507, 9508, 9509, 9510, 9511, 9512, 9513, 9514, 9515, 9516, 9517, 9518, 9519, 9520, 9521, 9522, 9523, 9524, 9525, 9526, 9527, 9528, 9529, 9530, 9531, 9532, 9533, 9534, 9535, 9536, 9537, 9538, 9539, 9540, 9541, 9542, 9543, 9544, 9545, 9546, 9547, 9548, 9549, 9550, 9551, 9552, 9553, 9554, 9555, 9556, 9557, 9558, 9559, 9560, 9561, 9562, 9563, 9564, 9565, 9566, 9567, 9568, 9569, 9570, 9571, 9572, 9573, 9574, 9575, 9576, 9577, 9578, 9579, 9580, 9581, 9582, 9583, 9584, 9585, 9586, 9587, 9588, 9589, 9590, 9591, 9592, 9593, 9594, 9595, 9596, 9597, 9598, 9599, 9600, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9616, 9617, 9618, 9619, 9620, 9621, 9622, 9623, 9624, 9625, 9626, 9627, 9628, 9629, 9630, 9631, 9632, 9633, 9634, 9635, 9636, 9637, 9638, 9639, 9640, 9641, 9642, 9643, 9644, 9645, 9646, 9647, 9648, 9649, 9650, 9651, 9652, 9653, 9654, 9655, 9656, 9657, 9658, 9659, 9660]
    },
    {
      id: 40,
      name: 'Arm Assembly',
      fileName: '42-5577.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5577.pdf',
      seriesIdArray: [24],
      serialNumberIdArray: [],
      basemodelIdArray: [1475]
    },
    {
      id: 41,
      name: 'Back Enclosure',
      fileName: '242-7417.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7417.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1092, 1093, 1094, 1095, 1096]
    },
    {
      id: 42,
      name: 'Back Installation',
      fileName: '56-0459.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0459.pdf',
      seriesIdArray: [65],
      serialNumberIdArray: [],
      basemodelIdArray: [2254, 2255, 2256, 2257, 2258, 2259]
    },
    {
      id: 43,
      name: 'Base Cabinet Installation',
      fileName: '242-9807.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9807.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [3196, 3197, 3198, 3199, 3258, 3259, 3260, 3261]
    },
    {
      id: 44,
      name: 'Base to Table',
      fileName: '664-0240.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0240.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2214, 2215, 2216, 2217, 2218, 2223, 2224, 2225, 2226, 2227, 2239, 2240, 2241]
    },
    {
      id: 45,
      name: 'Book Box Installation',
      fileName: '664-0204.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/664-0204.pdf',
      seriesIdArray: [29, 62],
      serialNumberIdArray: [],
      basemodelIdArray: [1829, 1830, 2292]
    },
    {
      id: 46,
      name: 'Bookcase  Assembly',
      fileName: '56-0408.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0408.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2417, 2418, 2441, 2442]
    },
    {
      id: 47,
      name: 'Bookcase  Assembly',
      fileName: '242-6661.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6661.pdf',
      seriesIdArray: [20],
      serialNumberIdArray: [],
      basemodelIdArray: [1289, 1290, 1291, 1292, 1293, 1294]
    },
    {
      id: 48,
      name: 'Bookcase Assembly',
      fileName: '242-2515.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-2515.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1612, 1613, 1614, 1616, 1617]
    },
    {
      id: 49,
      name: 'Bookcase Assembly',
      fileName: '242-6941.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6941.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [1283, 1284, 1285, 1286, 1287, 1288]
    },
    {
      id: 50,
      name: 'Bookcase Assembly',
      fileName: '242-9175.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9175.pdf',
      seriesIdArray: [38, 70, 16, 68, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [984, 985, 986, 987, 1107, 1108, 1109, 1110, 1214, 1215, 1216, 2335, 2336, 2337, 2835, 2836, 2837, 2838, 2839, 2898, 2899]
    },
    {
      id: 51,
      name: 'Bookcase Assembly',
      fileName: '242-9664.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9664.pdf',
      seriesIdArray: [56, 33, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [3178, 3179, 4153, 4154, 4156, 4157, 4198, 4199, 4200]
    },
    {
      id: 52,
      name: 'Bookcase Hutch',
      fileName: '242-9665.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9665.pdf',
      seriesIdArray: [32, 56, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [3180, 3181, 3182, 4158, 4159, 4160, 4201, 4202]
    },
    {
      id: 53,
      name: 'Bookcase Pedestal',
      fileName: '242-9803.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9803.pdf',
      seriesIdArray: [70, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [2421, 2444, 2832, 2833, 2834]
    },
    {
      id: 54,
      name: 'Bow Top Modular Desk',
      fileName: '242-8881.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8881.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1721]
    },
    {
      id: 55,
      name: 'Bridge Assembly',
      fileName: '56-0637.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0637.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2913, 2916]
    },
    {
      id: 56,
      name: 'Bridge Assembly',
      fileName: '242-0001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0001.pdf',
      seriesIdArray: [68, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [1097, 1098, 1105, 1106, 1111, 1115, 1217, 1218, 1230, 1231, 1232]
    },
    {
      id: 57,
      name: 'Bridge Assembly',
      fileName: '242-0025.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0025.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1631]
    },
    {
      id: 58,
      name: 'Bridge Assembly',
      fileName: '242-0047.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0047.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1630]
    },
    {
      id: 59,
      name: 'Bridge Assembly',
      fileName: '242-0175.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0175.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4147, 4148, 4149, 4150, 4151, 4152]
    },
    {
      id: 60,
      name: 'Bridge Assembly',
      fileName: '242-7130.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7130.pdf',
      seriesIdArray: [16, 15],
      serialNumberIdArray: [],
      basemodelIdArray: [988, 989, 990, 1015, 1016, 1017, 2308]
    },
    {
      id: 61,
      name: 'Bridge Assembly',
      fileName: '242-7475.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7475.pdf',
      seriesIdArray: [56],
      serialNumberIdArray: [],
      basemodelIdArray: [3228, 3229, 3230, 3231]
    },
    {
      id: 62,
      name: 'Bridge Assembly',
      fileName: '242-8885.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8885.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1723]
    },
    {
      id: 63,
      name: 'Bridge Assembly',
      fileName: '242-9661.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9661.pdf',
      seriesIdArray: [56, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [3174, 3175, 3176, 4189, 4191, 4192]
    },
    {
      id: 64,
      name: 'Bridge/Return',
      fileName: '242-9815.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9815.pdf',
      seriesIdArray: [38, 70, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 2463, 2464, 2465, 2466, 2467, 2468, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161]
    },
    {
      id: 65,
      name: 'Cabinet Top',
      fileName: '242-9670.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9670.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [4184, 4185, 4190, 4193, 4194, 4195, 4208]
    },
    {
      id: 66,
      name: 'Cabinet Whiteboard Bracket',
      fileName: '143-0107.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0107.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2315]
    },
    {
      id: 67,
      name: 'Cableway to Raceway Retrofit Kit',
      fileName: '42-2249.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2249.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [3262, 3263]
    },
    {
      id: 68,
      name: 'Cam Lock',
      fileName: '42-2619.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2619.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2180, 2181, 2182]
    },
    {
      id: 69,
      name: 'Cart Assembly',
      fileName: '42-5372.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5372.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1391]
    },
    {
      id: 70,
      name: 'Cast Iron X-Base Assembly',
      fileName: '664-0060.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0060.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [1654, 1655, 1656]
    },
    {
      id: 71,
      name: 'Caster Installation',
      fileName: '42-2337.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2337.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [874]
    },
    {
      id: 72,
      name: 'Center Drawer',
      fileName: '42-2552.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2552.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1839, 1840, 1841]
    },
    {
      id: 73,
      name: 'Center Drawer',
      fileName: '242-0019.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0019.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1276, 1277]
    },
    {
      id: 74,
      name: 'Chair Assembly',
      fileName: '42-5390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5390.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2272, 2276]
    },
    {
      id: 75,
      name: 'Chair Assembly',
      fileName: '42-5453.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5453.pdf',
      seriesIdArray: [37],
      serialNumberIdArray: [],
      basemodelIdArray: [1409, 1410]
    },
    {
      id: 76,
      name: 'Chair Assembly',
      fileName: '42-5585.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5585.pdf',
      seriesIdArray: [37, 63],
      serialNumberIdArray: [],
      basemodelIdArray: [1383, 1384, 1385, 1386, 1407, 1408]
    },
    {
      id: 77,
      name: 'Chair Assembly',
      fileName: '46-1004.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1004.pdf',
      seriesIdArray: [31],
      serialNumberIdArray: [],
      basemodelIdArray: [1314]
    },
    {
      id: 78,
      name: 'Chair Cart',
      fileName: '42-9967.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9967.pdf',
      seriesIdArray: [44],
      serialNumberIdArray: [],
      basemodelIdArray: [2213]
    },
    {
      id: 79,
      name: 'Chair Cart',
      fileName: '46-1008.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1008.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [4135]
    },
    {
      id: 80,
      name: 'Chair Ganging and Magazine Holder',
      fileName: '42-9830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9830.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1395]
    },
    {
      id: 81,
      name: 'Chair-to-Chair Ganging',
      fileName: '56-0442.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0442.pdf',
      seriesIdArray: [65],
      serialNumberIdArray: [],
      basemodelIdArray: [2253]
    },
    {
      id: 82,
      name: 'Chair-to-Table Ganging',
      fileName: '56-0441.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0441.pdf',
      seriesIdArray: [65],
      serialNumberIdArray: [],
      basemodelIdArray: [2252]
    },
    {
      id: 83,
      name: 'Cockpit Corner Unit',
      fileName: '242-7125.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7125.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1028, 1029, 1238, 1239]
    },
    {
      id: 84,
      name: 'Collaborative Shelf',
      fileName: '56-0644.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0644.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3069]
    },
    {
      id: 85,
      name: 'Concencys Packet',
      fileName: '70-0010.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/70-0010.pdf',
      seriesIdArray: [4],
      serialNumberIdArray: [],
      basemodelIdArray: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 785, 786, 787, 788, 789, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 7843, 7844, 7845, 7846, 7847]
    },
    {
      id: 86,
      name: 'Contemporary Base Installation',
      fileName: '664-0354.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0354.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4106, 4107]
    },
    {
      id: 87,
      name: 'Corner Bookcase',
      fileName: '242-9811.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9811.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2369]
    },
    {
      id: 88,
      name: 'Corner Shield',
      fileName: '242-9125.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9125.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1612, 1613, 1614, 1615, 1616, 1617, 1625, 1626, 1627, 1628, 1629, 1632, 1634, 1635, 1636]
    },
    {
      id: 89,
      name: 'Corner Sleeve',
      fileName: '42-2445.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2445.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1398]
    },
    {
      id: 90,
      name: 'Corner Unit',
      fileName: '42-2361.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2361.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1365]
    },
    {
      id: 91,
      name: 'Corner Unit',
      fileName: '242-0082.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0082.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1139]
    },
    {
      id: 92,
      name: 'Corner Unit',
      fileName: '242-8000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8000.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [870]
    },
    {
      id: 93,
      name: 'Counterweight Kit',
      fileName: '42-2730.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/42-2730.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3826, 3827, 3828]
    },
    {
      id: 94,
      name: 'CPU Cabinet',
      fileName: '242-7668.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7668.pdf',
      seriesIdArray: [68, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [869, 1157]
    },
    {
      id: 95,
      name: 'Credenza Assembly',
      fileName: '242-7390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7390.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1208, 1209]
    },
    {
      id: 96,
      name: 'Credenza Installation',
      fileName: '664-0196.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0196.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4091, 4092, 4118, 4119]
    },
    {
      id: 97,
      name: 'Credenza Power Pack',
      fileName: '242-9832.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9832.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2373, 2374, 2644, 2645]
    },
    {
      id: 98,
      name: 'Credenza Shell (Full Modesty)',
      fileName: '56-0477.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0477.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [959, 961, 963, 965]
    },
    {
      id: 99,
      name: 'Credenza Shell (Short Modesty)',
      fileName: '56-0478.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0478.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [960, 962, 964, 966]
    },
    {
      id: 100,
      name: 'Cube Base Installation',
      fileName: '664-0360.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0360.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4099, 4131]
    },
    {
      id: 101,
      name: 'Cylinder Base Installation',
      fileName: '664-0362.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0362.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4098, 4126, 4127, 4128]
    },
    {
      id: 102,
      name: 'Desk and Return',
      fileName: '42-2300.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2300.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360]
    },
    {
      id: 103,
      name: 'Desk and Return',
      fileName: '42-2538.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2538.pdf',
      seriesIdArray: [50, 51, 29, 21],
      serialNumberIdArray: [],
      basemodelIdArray: [1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1518, 1519, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1828, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173]
    },
    {
      id: 104,
      name: 'Door Assembly',
      fileName: '242-3342.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-3342.pdf',
      seriesIdArray: [18],
      serialNumberIdArray: [],
      basemodelIdArray: [1281, 1282]
    },
    {
      id: 105,
      name: 'Door Cabinet',
      fileName: '242-7128.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7128.pdf',
      seriesIdArray: [16, 68, 17, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [895, 896, 973, 974, 1076, 1077, 1210, 4161]
    },
    {
      id: 106,
      name: 'Door Hinge Adjustment',
      fileName: '242-0021.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0021.pdf',
      seriesIdArray: [25, 70],
      serialNumberIdArray: [],
      basemodelIdArray: [1618, 2339, 2341, 2343, 2345, 2350, 2354, 2359, 2398, 2407, 2541, 2543, 2545, 2548, 2551, 2554, 2557]
    },
    {
      id: 107,
      name: 'Door Unit',
      fileName: '242-7224.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7224.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [868, 1156]
    },
    {
      id: 108,
      name: 'Double High Stack-On Unit',
      fileName: '56-0636.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0636.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2990, 2991, 2992, 2994, 2995, 2996, 3005, 3006, 3007, 3021, 3022, 3023, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064]
    },
    {
      id: 109,
      name: 'Drawer Handle Installation',
      fileName: '242-9087.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9087.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1763, 1764]
    },
    {
      id: 110,
      name: 'Drawer Organizer',
      fileName: '242-9814.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9814.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2469]
    },
    {
      id: 111,
      name: 'Electrical System',
      fileName: '42-2241.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2241.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [2244, 2245, 2246]
    },
    {
      id: 112,
      name: 'Electrical System',
      fileName: '343-0477.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0477.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [2247, 2248, 2249, 2250]
    },
    {
      id: 113,
      name: 'End Book Shelf',
      fileName: '242-7202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7202.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1146]
    },
    {
      id: 114,
      name: 'Essentials/Persona Packet',
      fileName: '343-0100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0100.pdf',
      seriesIdArray: [5],
      serialNumberIdArray: [],
      basemodelIdArray: [1, 2, 188, 497, 498, 7842, 7849, 7851, 7853, 7855, 7857, 7858, 7859, 7860, 7861, 7863, 7865, 7867, 7868, 7869]
    },
    {
      id: 115,
      name: 'Extended Corner Unit',
      fileName: '242-7297.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7297.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1030, 1031, 1240, 1241]
    },
    {
      id: 116,
      name: 'Extended Corner Unit',
      fileName: '242-9139.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9139.pdf',
      seriesIdArray: [38, 56],
      serialNumberIdArray: [],
      basemodelIdArray: [3070, 3071, 3072, 3073, 3281, 3282, 3283, 3284]
    },
    {
      id: 117,
      name: 'External Stiffener',
      fileName: '242-9819.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/242-9819.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2536, 2537, 2538, 2539]
    },
    {
      id: 118,
      name: 'Field Installable Drawer Pull (Cresc./Sweep)',
      fileName: '242-7191.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7191.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1831, 1832, 1833, 1834, 1835, 1836, 4056, 4057, 4058, 4059, 4060, 4061]
    },
    {
      id: 119,
      name: 'Field Installable Drawer Pull (Linear)',
      fileName: '242-9563.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9563.pdf',
      seriesIdArray: [16, 59, 68, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [2300, 2301, 2302, 2303]
    },
    {
      id: 120,
      name: 'Field Installable Grommet',
      fileName: '242-7120.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7120.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2219]
    },
    {
      id: 121,
      name: 'Field Installable Top',
      fileName: '56-0337.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0337.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3878, 3879, 3880]
    },
    {
      id: 122,
      name: 'Fixed and Adjustable Leg',
      fileName: '664-1200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1200.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2696, 2698, 2700, 2702, 2704, 2717, 2719, 2721, 2722, 2724, 2726, 2728, 2729, 2731, 2733, 2735, 2736, 2738, 2739, 2741, 2742, 2744, 2746, 2748, 2749, 2751, 2752, 2754, 2756, 2758, 2759, 2761, 2762, 2764, 2766, 2768, 2769, 2771, 2773, 2775, 2776, 2778, 2779, 2781, 2783, 2785, 2786, 2788, 2789, 2791, 2793, 2795, 2796, 2798, 2799, 2801, 2803, 2805, 2806, 2808, 2810, 2812, 2813, 2815, 2816, 2818, 2819, 2821, 2823, 2825, 2827, 2829]
    },
    {
      id: 123,
      name: 'Fixed Arm Installation',
      fileName: '46-1050.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1050.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2268, 2269]
    },
    {
      id: 124,
      name: 'Flipper Doors',
      fileName: '343-0141.PDF',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0141.PDF',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1345, 1346, 1351, 1352]
    },
    {
      id: 125,
      name: 'Flush Height Return',
      fileName: '242-0002.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0002.pdf',
      seriesIdArray: [68, 17, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1034, 1035, 1036, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1253, 1255]
    },
    {
      id: 126,
      name: 'Flush Height Return',
      fileName: '242-0024.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0024.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1608, 1609, 1610, 1611, 1623]
    },
    {
      id: 127,
      name: 'Flush Height Return',
      fileName: '242-9346.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9346.pdf',
      seriesIdArray: [33, 56],
      serialNumberIdArray: [],
      basemodelIdArray: [3190, 3191, 3192, 3193, 3194, 3195, 4182, 4183, 4186, 4187]
    },
    {
      id: 128,
      name: 'Folding Leg Installation',
      fileName: '664-1202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1202.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2718, 2725, 2732, 2745, 2755, 2765, 2782, 2792, 2802]
    },
    {
      id: 129,
      name: 'Foot Platform Installation',
      fileName: '56-0430.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0430.pdf',
      seriesIdArray: [65],
      serialNumberIdArray: [],
      basemodelIdArray: [2260]
    },
    {
      id: 130,
      name: 'Frame and Tile Panel System',
      fileName: '343-2270G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2270G.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3651, 3652, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810]
    },
    {
      id: 131,
      name: 'Frame and Tile System- French',
      fileName: '143-0118.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0118.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3447, 3449, 3451, 3453, 3455, 3457, 3459, 3461, 3463, 3465, 3467, 3469, 3471, 3473, 3475, 3477, 3479, 3481, 3483, 3485, 3487, 3489, 3491, 3493, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3561, 3564, 3567, 3570, 3573, 3577, 3585, 3586, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3597, 3598, 3599, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3610, 3611, 3612, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3623, 3624, 3625, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3636, 3637, 3638, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3649, 3651, 3652, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3663, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3736, 3737, 3738, 3739, 3741, 3742, 3743, 3744, 3746, 3747, 3748, 3749, 3751, 3752, 3753, 3754, 3756, 3757, 3758, 3759, 3761, 3762, 3763, 3764, 3766, 3767, 3769, 3770, 3772, 3773, 3775, 3776, 3778, 3779, 3781, 3782, 3784, 3785, 3787, 3788, 3790, 3791, 3793, 3794, 3796, 3797, 3799, 3800, 3804]
    },
    {
      id: 132,
      name: 'Frameless Glass Installation',
      fileName: '143-0160.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0160.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3587, 3600, 3613, 3626, 3639, 3650, 3653, 3664, 3665, 3666, 3667, 3668, 3669, 3802]
    },
    {
      id: 133,
      name: 'Front-to-Rear Mounting Bracket',
      fileName: '42-2390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2390.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1382]
    },
    {
      id: 134,
      name: 'Full Height Pedestal',
      fileName: '242-7223.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7223.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [864, 866, 870, 871, 1152, 1154]
    },
    {
      id: 135,
      name: 'Full Length Pedestal',
      fileName: '242-7072.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7072.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1683, 1684]
    },
    {
      id: 136,
      name: 'Full Length Pedestal',
      fileName: '242-8886.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8886.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1724, 1725, 1728]
    },
    {
      id: 137,
      name: 'Further Packet',
      fileName: '3430358000G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430358000G.pdf',
      seriesIdArray: [6],
      serialNumberIdArray: [],
      basemodelIdArray: [189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 9372, 9373, 9374, 9375, 9376, 9377, 9378, 9379, 9380, 9381, 9382, 9383, 9384, 9385, 9386, 9387, 9388, 9389, 9390, 9391, 9392, 9393, 9394, 9395, 9396, 9397, 9398, 9399, 9400, 9401, 9402, 9403, 9404, 9405, 9406, 9407, 9408, 9409, 9410, 9411, 9412, 9413, 9414, 9415, 9416, 9417, 9418, 9419, 9420, 9421, 9422, 9423, 9424, 9425, 9426, 9427, 9428, 9429, 9430, 9431, 9432, 9433, 9434, 9435, 9436, 9437, 9438, 9439, 9440, 9441, 9442, 9443, 9444, 9445, 9446, 9447, 9448, 9449, 9450, 9451, 9452, 9453, 9454, 9455, 9456, 9457, 9458]
    },
    {
      id: 138,
      name: 'Ganging Bracket',
      fileName: '664-0248.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0248.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2222]
    },
    {
      id: 139,
      name: 'Ganging Chair Installation',
      fileName: '46-1042.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1042.pdf',
      seriesIdArray: [61],
      serialNumberIdArray: [],
      basemodelIdArray: [4349, 4350, 4351, 4352, 4353, 4354, 4355, 4356, 4357]
    },
    {
      id: 140,
      name: 'Ganging Corner Table',
      fileName: '46-1044.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1044.pdf',
      seriesIdArray: [61],
      serialNumberIdArray: [],
      basemodelIdArray: [4346, 4347, 4348, 4361]
    },
    {
      id: 141,
      name: 'Ganging Glide',
      fileName: '42-9950.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9950.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1390, 1392]
    },
    {
      id: 142,
      name: 'Ganging Hardware Installation',
      fileName: '664-2001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-2001.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2646]
    },
    {
      id: 143,
      name: 'Ganging In-Line Table',
      fileName: '46-1043.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1043.pdf',
      seriesIdArray: [61],
      serialNumberIdArray: [],
      basemodelIdArray: [4346, 4347, 4348, 4349, 4350, 4351, 4355, 4356, 4357, 4358, 4359, 4360, 4362]
    },
    {
      id: 144,
      name: 'Glass Modesty Panel',
      fileName: '242-7169.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7169.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [952, 953, 954]
    },
    {
      id: 145,
      name: 'Glide Adjustment',
      fileName: '42-2336OBSOLETE.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2336OBSOLETE.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3933, 3934, 3935, 3936, 3937, 3938, 3939, 3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949, 3950, 3951, 3952, 3953, 3954, 3955, 3956]
    },
    {
      id: 146,
      name: 'Glide Installation',
      fileName: '42-5604.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5604.pdf',
      seriesIdArray: [54],
      serialNumberIdArray: [],
      basemodelIdArray: [1393, 1394]
    },
    {
      id: 147,
      name: 'Glide Installation',
      fileName: '46-0062.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/46-0062.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2684]
    },
    {
      id: 148,
      name: 'Glide Installation',
      fileName: '143-0500.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-0500.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2671, 2672, 2673, 2675]
    },
    {
      id: 149,
      name: 'Glide Tower',
      fileName: '42-2333.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2333.pdf',
      seriesIdArray: [29, 67],
      serialNumberIdArray: [],
      basemodelIdArray: [1313, 4136, 4137, 4138, 4139]
    },
    {
      id: 150,
      name: 'Handle Installation',
      fileName: '143-1151.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1151.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2671, 2672, 2675, 2676, 2679]
    },
    {
      id: 151,
      name: 'Hang Rail Kit',
      fileName: '143-0103.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0103.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2312]
    },
    {
      id: 152,
      name: 'Hanging Pedestal',
      fileName: '42-2330OBSOLETE.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2330OBSOLETE.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1270, 1271, 1272, 1273, 1274, 1275]
    },
    {
      id: 153,
      name: 'Hanging Pedestal',
      fileName: '56-0338.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/56-0338.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3889, 3890, 3891, 3892, 3893, 3894, 3895, 3896, 3897, 3898, 3899, 3900]
    },
    {
      id: 154,
      name: 'Hanging Pedestal',
      fileName: '242-7222.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7222.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [863, 1151]
    },
    {
      id: 155,
      name: 'Hanging Reception Unit',
      fileName: '242-9429.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9429.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1023]
    },
    {
      id: 156,
      name: 'Hangrail Installation',
      fileName: '242-0150.PDF',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Paoli%20Instruction%20Sheets/242-0150.PDF',
      seriesIdArray: [68, 25, 34, 70, 56],
      serialNumberIdArray: [],
      basemodelIdArray: [1152, 1154, 1158, 1159, 1160, 1161, 1248, 1249, 1250, 1251, 1252, 1254, 1264, 1265, 1266, 1267, 1608, 1609, 1610, 1611, 1623, 1625, 1626, 1627, 1628, 1629, 1632, 1633, 1634, 1635, 1636, 2400, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3248, 3249, 3269, 3270, 3271, 3272, 3273]
    },
    {
      id: 157,
      name: 'Hangrail Installation',
      fileName: '242-7440.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7440.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1158, 1162, 1163, 1164, 1166, 1178, 1180, 1181, 1204, 1205, 1206, 1207, 1222, 1223, 1233, 1235, 1242, 1243, 1244, 1245, 1246, 1247, 1257, 1259]
    },
    {
      id: 158,
      name: 'Hardwire Power In-Feed',
      fileName: '43-0179.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/43-0179.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [2242, 2243]
    },
    {
      id: 159,
      name: 'Hollow Base Installation',
      fileName: '664-0358.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0358.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4114, 4120, 4129, 4130]
    },
    {
      id: 160,
      name: 'Hutch Assembly',
      fileName: '56-0395.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/56-0395.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1347, 1348, 1349, 1350]
    },
    {
      id: 161,
      name: 'Hutch O-Leg',
      fileName: '242-9825.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9825.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2449, 2453]
    },
    {
      id: 162,
      name: 'Hutch Shelf',
      fileName: '242-9826.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9826.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2451, 2455, 2458, 2461]
    },
    {
      id: 163,
      name: 'Involve Packet',
      fileName: '343-2950.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2950.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 812, 4064, 4065, 4066, 4067, 4068, 4069, 4070, 4071, 4072, 4073, 4074, 4075, 4076, 4077, 4078, 5153, 5154, 5155, 5156, 5157, 5158, 5159, 5160, 5161, 5162, 5163, 5164, 5165, 5166, 5167, 5168, 5169, 5170, 5171, 5172, 5173, 5174, 5175, 5176, 5177, 5178, 5179, 5180, 5181, 5182, 5183, 5184, 5185, 5186, 5187, 5188, 5189, 5190, 5191, 5192, 5193, 5194, 5195, 5196, 5197, 5198, 5199, 5200, 5201, 5202, 5203, 5204, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 5212, 5213, 5214, 5215, 5216, 5217, 5218, 5219, 5220, 5221, 5222, 5223, 5224, 5225, 5226, 5227, 5228, 5229, 5230, 5231, 5232, 5233, 5234, 5235, 5236, 5237, 5238, 5239, 5240, 5241, 5242, 5243, 5244, 5245, 5246, 5247, 5248, 5249, 5250, 5251, 5252, 5253, 5254, 5255, 5256, 5257, 5258, 5259, 5260, 5261, 5262, 5263, 5264, 5265, 5266, 5267, 5268, 5269, 5270, 5271, 5272, 5273, 5274, 5275, 5276, 5277, 5278, 5279, 5280, 5281, 5282, 5283, 5284, 5285, 5286, 5287, 5288, 5289, 5290, 5291, 5292, 5293, 5294, 5295, 5296, 5297, 5298, 5299, 5300, 5301, 5302, 5303, 5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311, 5312, 5313, 5314, 5315, 5316, 5317, 5318, 5319, 5320, 5321, 5322, 5323, 5324, 5325, 5326, 5327, 5328, 5329, 5330, 5331, 5332, 5333, 5334, 5335, 5336, 5337, 5338, 5339, 5340, 5341, 5342, 5343, 5344, 5345, 5346, 5347, 5348, 5349, 5350, 5351, 5352, 5353, 5354, 5355, 5356, 5357, 5358, 5359, 5360, 5361, 5362, 5363, 5364, 5365, 5366, 5367, 5368, 5369, 5370, 5371, 5372, 5373, 5374, 5375, 5376, 5377, 5378, 5379, 5380, 5381, 5382, 5383, 5384, 5385, 5386, 5387, 5388, 5389, 5390, 5391, 5392, 5393, 5394, 5395, 5396, 5397, 5398, 5399, 5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5409, 5410, 5411, 5412, 5413, 5414, 5415, 5416, 5417, 5418, 5419, 5420, 5421, 5422, 5423, 5424, 5425, 5426, 5427, 5428, 5429, 5430, 5431, 5432, 5433, 5434, 5435, 5436, 5437, 5438, 5439, 5440, 5441, 5442, 5443, 5444, 5445, 5446, 5447, 5448, 5449, 5450, 5451, 5452, 5453, 5454, 5455, 5456, 5457, 5458, 5459, 5460, 5461, 5462, 5463, 5464, 5465, 5466, 5467, 5468, 5469, 5470, 5471, 5472, 5473, 5474, 5475, 5476, 5477, 5478, 5479, 5480, 5481, 5482, 5483, 5484, 5485, 5486, 5487, 5488, 5489, 5490, 5491, 5492, 5493, 5494, 5495, 5496, 5497, 5498, 5499, 5500, 5501, 5502, 5503, 5504, 5505, 5506, 5507, 5508, 5509, 5510, 5511, 5512, 5513, 5514, 5515, 5516, 5517, 5518, 5519, 5520, 5521, 5522, 5523, 5524, 5525, 5526, 5527, 5528, 5529, 5530, 5531, 5532, 5533, 5534, 5535, 5536, 5537, 5538, 5539, 5540, 5541, 5542, 5543, 5544, 5545, 5546, 5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 5555, 5556, 5557, 5558, 5559, 5560, 5561, 5562, 5563, 5564, 5565, 5566, 5567, 5568, 5569, 5570, 5571, 5572, 5573, 5574, 5575, 5576, 5577, 5578, 5579, 5580, 5581, 5582, 5583, 5584, 5585, 5586, 5587, 5588, 5589, 5590, 5591, 5592, 5593, 5594, 5595, 5596, 5597, 5598, 5599, 5600, 5601, 5602, 5603, 5604, 5605, 5606, 5607, 5608, 5609, 5610, 5611, 5612, 5613, 5614, 5615, 5616, 5617, 5618, 5619, 5620, 5621, 5622, 5623, 5624, 5625, 5626, 5627, 5628, 5629, 5630, 5631, 5632, 5633, 5634, 5635, 5636, 5637, 5638, 5639, 5640, 5641, 5642, 5643, 5644, 5645, 5646, 5647, 5648, 5649, 5650, 5651, 5652, 5653, 5654, 5655, 5656, 5657, 5658, 5659, 5660, 5661, 5662, 5663, 5664, 5665, 5666, 5667, 5668, 5669, 5670, 5671, 5672, 5673, 5674, 5675, 5676, 5677, 5678, 5679, 5680, 5681, 5682, 5683, 5684, 5685, 5686, 5687, 5688, 5689, 5690, 5691, 5692, 5693, 5694, 5695, 5696, 5697, 5698, 5699, 5700, 5701, 5702, 5703, 5704, 5705, 5706, 5707, 5708, 5709, 5710, 5711, 5712, 5713, 5714, 5715, 5716, 5717, 5718, 5719, 5720, 5721, 5722, 5723, 5724, 5725, 5726, 5727, 5728, 5729, 5730, 5731, 5732, 5733, 5734, 5735, 5736, 5737, 5738, 5739, 5740, 5741, 5742, 5743, 5744, 5745, 5746, 5747, 5748, 5749, 5750, 5751, 5752, 5753, 5754, 5755, 5756, 5757, 5758, 5759, 5760, 5761, 5762, 5763, 5764, 5765, 5766, 5767, 5768, 5769, 5770, 5771, 5772, 5773, 5774, 5775, 5776, 5777, 5778, 5779, 5780, 5781, 5782, 5783, 5784, 5785, 5786, 5787, 5788, 5789, 5790, 5791, 5792, 5793, 5794, 5795, 5796, 5797, 5798, 5799, 5800, 5801, 5802, 5803, 5804, 5805, 5806, 5807, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5815, 5816, 5817, 5818, 5819, 5820, 5821, 5822, 5823, 5824, 5825, 5826, 5827, 5828, 5829, 5830, 5831, 5832, 5833, 5834, 5835, 5836, 5837, 5838, 5839, 5840, 5841, 5842, 5843, 5844, 5845, 5846, 5847, 5848, 5849, 5850, 5851, 5852, 5853, 5854, 5855, 5856, 5857, 5858, 5859, 5860, 5861, 5862, 5863, 5864, 5865, 5866, 5867, 5868, 5869, 5870, 5871, 5872, 5873, 5874, 5875, 5876, 5877, 5878, 5879, 5880, 5881, 5882, 5883, 5884, 5885, 5886, 5887, 5888, 5889, 5890, 5891, 5892, 5893, 5894, 5895, 5896, 5897, 5898, 5899, 5900, 5901, 5902, 5903, 5904, 5905, 5906, 5907, 5908, 5909, 5910, 5911, 5912, 5913, 5914, 5915, 5916, 5917, 5918, 5919, 5920, 5921, 5922, 5923, 5924, 5925, 5926, 5927, 5928, 5929, 5930, 5931, 5932, 5933, 5934, 5935, 5936, 5937, 5938, 5939, 5940, 5941, 5942, 5943, 5944, 5945, 5946, 5947, 5948, 5949, 5950, 5951, 5952, 5953, 5954, 5955, 5956, 5957, 5958, 5959, 5960, 5961, 5962, 5963, 5964, 5965, 5966, 5967, 5968, 5969, 5970, 5971, 5972, 5973, 5974, 5975, 5976, 5977, 5978, 5979, 5980, 5981, 5982, 5983, 5984, 5985, 5986, 5987, 5988, 5989, 5990, 5991, 5992, 5993, 5994, 5995, 5996, 5997, 5998, 5999, 6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009, 6010, 6011, 6012, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 6020, 6021, 6022, 6023, 6024, 6025, 6026, 6027, 6028, 6029, 6030, 6031, 6032, 6033, 6034, 6035, 6036, 6037, 6038, 6039, 6040, 6041, 6042, 6043, 6044, 6045, 6046, 6047, 6048, 6049, 6050, 6051, 6052, 6053, 6054, 6055, 6056, 6057, 6058, 6059, 6060, 6061, 6062, 6063, 6064, 6065, 6066, 6067, 6068, 6069, 6070, 6071, 6072, 6073, 6074, 6075, 6076, 6077, 6078, 6079, 6080, 6081, 6082, 6083, 6084, 6085, 6086, 6087, 6088, 6089, 6090, 6091, 6092, 6093, 6094, 6095, 6096, 6097, 6098, 6099, 6100, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6112, 6113, 6114, 6115, 6116, 6117, 6118, 6119, 6120, 6121, 6122, 6123, 6124, 6125, 6126, 6127, 6128, 6129, 6130, 6131, 6132, 6133, 6134, 6135, 6136, 6137, 6138, 6139, 6140, 6141, 6142, 6143, 6144, 6145, 6146, 6147, 6148, 6149, 6150, 6151, 6152, 6153, 6154, 6155, 6156, 6157, 6158, 6159, 6160, 6161, 6162, 6163, 6164, 6165, 6166, 6167, 6168, 6169, 6170, 6171, 6172, 6173, 6174, 6175, 6176, 6177, 6178, 6179, 6180, 6181, 6182, 6183, 6184, 6185, 6186, 6187, 6188, 6189, 6190, 6191, 6192, 6193, 6194, 6195, 6196, 6197, 6198, 6199, 6200, 6201, 6202, 6203, 6204, 6205, 6206, 6207, 6208, 6209, 6210, 6211, 6212, 6213, 6214, 6215, 6216, 6217, 6218, 6219, 6220, 6221, 6222, 6223, 6224, 6225, 6226, 6227, 6228, 6229, 6230, 6231, 6232, 6233, 6234, 6235, 6236, 6237, 6238, 6239, 6240, 6241, 6242, 6243, 6244, 6245, 6246, 6247, 6248, 6249, 6250, 6251, 6252, 6253, 6254, 6255, 6256, 6257, 6258, 6259, 6260, 6261, 6262, 6263, 6264, 6265, 6266, 6267, 6268, 6269, 6270, 6271, 6272, 6273, 6274, 6275, 6276, 6277, 6278, 6279, 6280, 6281, 6282, 6283, 6284, 6285, 6286, 6287, 6288, 6289, 6290, 6291, 6292, 6293, 6294, 6295, 6296, 6297, 6298, 6299, 6300, 6301, 6302, 6303, 6304, 6305, 6306, 6307, 6308, 6309, 6310, 6311, 6312, 6313, 6314, 6315, 6316, 6317, 6318, 6319, 6320, 6321, 6322, 6323, 6324, 6325, 6326, 6327, 6328, 6329, 6330, 6331, 6332, 6333, 6334, 6335, 6336, 6337, 6338, 6339, 6340, 6341, 6342, 6343, 6344, 6345, 6346, 6347, 6348, 6349, 6350, 6351, 6352, 6353, 6354, 6355, 6356, 6357, 6358, 6359, 6360, 6361, 6362, 6363, 6364, 6365, 6366, 6367, 6368, 6369, 6370, 6371, 6372, 6373, 6374, 6375, 6376, 6377, 6378, 6379, 6380, 6381, 6382, 6383, 6384, 6385, 6386, 6387, 6388, 6389, 6390, 6391, 6392, 6393, 6394, 6395, 6396, 6397, 6398, 6399, 6400, 6401, 6402, 6403, 6404, 6405, 6406, 6407, 6408, 6409, 6410, 6411, 6412, 6413, 6414, 6415, 6416, 6417, 6418, 6419, 6420, 6421, 6422, 6423, 6424, 6425, 6426, 6427, 6428, 6429, 6430, 6431, 6432, 6433, 6434, 6435, 6436, 6437, 6438, 6439, 6440, 6441, 6442, 6443, 6444, 6445, 6446, 6447, 6448, 6449, 6450, 6451, 6452, 6453, 6454, 6455, 6456, 6457, 6458, 6459, 6460, 6461, 6462, 6463, 6464, 6465, 6466, 6467, 6468, 6469, 6470, 6471, 6472, 6473, 6474, 6475, 6476, 6477, 6478, 6479, 6480, 6481, 6482, 6483, 6484, 6485, 6486, 6487, 6488, 6489, 6490, 6491, 6492, 6493, 6494, 6495, 6496, 6497, 6498, 6499, 6500, 6501, 6502, 6503, 6504, 6505, 6506, 6507, 6508, 6509, 6510, 6511, 6512, 6513, 6514, 6515, 6516, 6517, 6518, 6519, 6520, 6521, 6522, 6523, 6524, 6525, 6526, 6527, 6528, 6529, 6530, 6531, 6532, 6533, 6534, 6535, 6536, 6537, 6538, 6539, 6540, 6541, 6542, 6543, 6544, 6545, 6546, 6547, 6548, 6549, 6550, 6551, 6552, 6553, 6554, 6555, 6556, 6557, 6558, 6559, 6560, 6561, 6562, 6563, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7963, 7964, 7965, 7966, 7967, 7968, 7969, 7970, 7971, 7972, 7973, 7974, 7975, 7976, 7977, 7978, 7979, 7980, 7981, 7982, 7983, 7984, 7985, 7986, 7987, 7988, 7989, 7990, 7991, 7992, 7993, 7994, 7995, 7996, 7997, 7998, 7999, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8061, 8062, 8063, 8064, 8065, 8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088, 8089, 8090, 8091, 8092, 8093, 8094, 8095, 8096, 8097, 8098, 8099, 8100, 8101, 8102, 8103, 8104, 8105, 8106, 8107, 8108, 8109, 8110, 8111, 8112, 8113, 8114, 8115, 8116, 8117, 8118, 8119, 8120, 8121, 8122, 8123, 8124, 8125, 8126, 8127, 8128, 8129, 8130, 8131, 8132, 8133, 8134, 8135, 8136, 8137, 8138, 8139, 8140, 8141, 8142, 8143, 8144, 8145, 8146, 8147, 8148, 8149, 8150, 8151, 8152, 8153, 8154, 8155, 8156, 8157, 8158, 8159, 8160, 8161, 8162, 8163, 8164, 8165, 8166, 8167, 8168, 8169, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 8179, 8180, 8181, 8182, 8183, 8184, 8185, 8186, 8187, 8188, 8189, 8190, 8191, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8216, 8217, 8218, 8219, 8220, 8221, 8222, 8223, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8232, 8233, 8234, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8244, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8253, 8254, 8255, 8256, 8257, 8258, 8259, 8260, 8261, 8262, 8263, 8264, 8265, 8266, 8267, 8268, 8269, 8270, 8271, 8272, 8273, 8274, 8275, 8276, 8277, 8278, 8279, 8280, 8281, 8282, 8283, 8284, 8285, 8286, 8287, 8288, 8289, 8290, 8291, 8292, 8293, 8294, 8295, 8296, 8297, 8298, 8299, 8300, 8301, 8302, 8303, 8304, 8305, 8306, 8307, 8308, 8309, 8310, 8311, 8312, 8313, 8314, 8315, 8316, 8317, 8318, 8319, 8320, 8321, 8322, 8323, 8324, 8325, 8326, 8327, 8328, 8329, 8330, 8331, 8332, 8333, 8334, 8335, 8336, 8337, 8338, 8339, 8340, 8341, 8342, 8343, 8344, 8345, 8346, 8347, 8348, 8349, 8350, 8351, 8352, 8353, 8354, 8355, 8356, 8357, 8358, 8359, 8360, 8361, 8362, 8363, 8364, 8365, 8366, 8367, 8368, 8369, 8370, 8371, 8372, 8373, 8374, 8375, 8376, 8377, 8378, 8379, 8380, 8381, 8382, 8383, 8384, 8385, 8386, 8387, 8388, 8389, 8390, 8391, 8392, 8393, 8394, 8395, 8396, 8397, 8398, 8399, 8400, 8401, 8402, 8403, 8404, 8405, 8406, 8407, 8408, 8409, 8410, 8411, 8412, 8413, 8414, 8415, 8416, 8417, 8418, 8419, 8420, 8421, 8422, 8423, 8424, 8425, 8426, 8427, 8428, 8429, 8430, 8431, 8432, 8433, 8434, 8435, 8436, 8437, 8438, 8439, 8440, 8441, 8442, 8443, 8444, 8445, 8446, 8447, 8448, 8449, 8450, 8451, 8452, 8453, 8454, 8455, 8456, 8457, 8458, 8459, 8460, 8461, 8462, 8463, 8464, 8465, 8466, 8467, 8468, 8469, 8470, 8471, 8472, 8473, 8474, 8475, 8476, 8477, 8478, 8479, 8480, 8481, 8482, 8483, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8491, 8492, 8493, 8494, 8495, 8496, 8497, 8498, 8499, 8500, 8501, 8502, 8503, 8504, 8505, 8506, 8507, 8508, 8509, 8510, 8511, 8512, 8513, 8514, 8515, 8516, 8517, 8518, 8519, 8520, 8521, 8522, 8523, 8524, 8525, 8526, 8527, 8528, 8529, 8530, 8531, 8532, 8533, 8534, 8535, 8536, 8537, 8538, 8539, 8540, 8541, 8542, 8543, 8701, 8702, 8703, 8704, 8705, 8706, 8707, 8708, 8709, 8710, 8711, 8712, 8713, 8714, 8715, 8716, 8717, 8718, 8719, 8720, 8721, 8722, 8723, 8724, 8725, 8726, 8727, 8728, 8729, 8730, 8731, 8732, 8733, 8734, 8735, 8736, 8737, 8748, 8753, 8759, 8760, 8761, 8762, 8763, 8764, 8765, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8807, 8808, 8809, 8810, 8811, 8812, 8813, 8814, 8815, 8816, 8817, 8818, 8819, 8820, 8821, 8822, 8823, 8824, 8825, 8826, 9367, 9368, 9667, 9668, 9669, 9670, 9671, 9672, 9673, 9674, 9675, 9676, 9677, 9678, 9679, 9680, 9681, 9682, 9683, 9684, 9685, 9686, 9687, 9688, 9689, 9690, 9691, 9692, 9693, 9874, 9875, 9876, 9877, 9878, 9879, 9880, 9881, 9882, 9883, 9884, 9885, 9886, 9887, 9888, 9889, 9890, 9891, 9892, 9893, 9894, 9895, 9896, 9897, 9898, 9899, 9900, 9901, 9902, 9906, 9907, 9908, 9909, 9913, 9914, 9915, 9919, 9920, 9921, 9925, 9926, 9927, 9931, 9932, 9933, 9937, 9938, 9939, 9943, 9944, 9965, 9966, 9967, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9979, 9980, 9981, 9982, 9983, 9984, 9988, 9989, 9990, 9991, 9995, 9996, 9997, 10001, 10002, 10008, 10012, 10013, 10014, 10015, 10019, 10020, 10021, 10025, 10026, 10035, 10036, 10037, 10038, 10042, 10043, 10044, 10048, 10049, 10055, 10056, 10057, 10058, 10062, 10063, 10064, 10068, 10069, 10075, 10076, 10077, 10081, 10082, 10083, 10087, 10088, 10094, 10095, 10096, 10100, 10101, 10102, 10106, 10107, 10113, 10117, 10118, 10119, 10123, 10124, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10144, 10145, 10151, 10155, 10156, 10162, 10166, 10167, 10173, 10177, 10178, 10184, 10188, 10189, 10195, 10199, 10200, 10206, 10210, 10211, 10445, 10446, 10716, 10741, 10742, 10743, 10744, 10745, 10746, 10747, 10748, 10749, 10750, 10751, 10752, 10753, 10754, 10755, 10756, 10757, 10758, 10759, 10760, 10761, 10762, 10763, 10764, 10765, 10766, 10767, 10768, 10769, 10770, 10771, 10772, 10773, 10774, 10775, 10776, 10777, 10778, 10779, 10780, 10781, 10782, 10783, 10784, 10785, 10786, 10787, 10788, 10791, 10792, 10793, 10794, 10795, 10796, 10797, 10800, 10801, 10804, 10805, 10808, 10809, 10812, 10813, 10816, 10817, 10820, 10821, 10822, 10823, 10824, 10825, 10828, 10829, 10832, 10833, 10836, 10837, 10840, 10841, 10844, 10845, 10848, 10849, 10852, 10853, 10856, 10857, 10860, 10861, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 10874, 10875, 10876, 10877, 10878, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 10888, 10889, 10890, 10891, 10892, 10893, 10894, 10895, 10896, 10897, 10898, 10899, 10900, 10901, 10902, 10903, 10904, 10907, 10908, 10909, 10912, 10913, 10916, 10917, 10918, 10919, 10920, 10921, 10924, 10927, 10930, 10931, 10932, 10935, 10936, 10939, 10940, 10943, 10948, 10949, 10950, 10953, 10954, 10957, 10958, 10961, 10964, 10965, 10966, 10969, 10970, 10973, 10974, 10977, 10980, 10981, 10982, 10985, 10986, 10989, 10990, 10993, 10996, 10997, 10998, 11001, 11002, 11005, 11006, 11009, 11012, 11013, 11014, 11017, 11018, 11021, 11022, 11025, 11028, 11029, 11030, 11031, 11032, 11033, 11034, 11035, 11036, 11037, 11038, 11039, 11042, 11043, 11044, 11045, 11048, 11051, 11054, 11055, 11058, 11061, 11064, 11065, 11068, 11071, 11074, 11075, 11078, 11081, 11084, 11085, 11088, 11091, 11094, 11095, 11098, 11101, 11104, 11105, 11108, 11111, 11112, 11113, 11114, 11115, 11118, 11119, 11122, 11123, 11126, 11127, 11130, 11131, 11134, 11135, 11138, 11139, 11142, 11143, 11146, 11147, 11150, 11151, 11154, 11155, 11156, 11157, 11158, 11159, 11160, 11161, 11162, 11163, 11164, 11165, 11166, 11167, 11168, 11169, 11170, 11171, 11172, 11173, 11174, 11175, 11176, 11177, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 11194, 11195, 11196, 11197, 11198, 11199, 11200, 11201, 11202, 11203, 11204, 11205, 11206, 11207, 11208, 11209, 11210, 11211, 11212, 11213, 11214, 11215, 11216, 11217, 11218, 11219, 11220, 11221, 11222, 11223, 11224, 11225, 11226, 11227, 11228, 11229, 11230, 11231, 11232, 11233, 11234, 11235, 11236, 11237, 11238, 11239, 11240, 11241, 11242, 11243, 11244, 11245, 11246, 11247, 11248, 11249, 11250, 11251, 11252]
    },
    {
      id: 164,
      name: 'Jetty Peninsula',
      fileName: '242-7234.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7234.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [884, 885, 1167, 1168]
    },
    {
      id: 165,
      name: 'Keyboard Platform',
      fileName: '42-2470.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2470.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1388, 1389]
    },
    {
      id: 166,
      name: 'Keyboard Platform',
      fileName: '43-0166.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/43-0166.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1387, 1842]
    },
    {
      id: 167,
      name: 'Keyboard Platform Installation',
      fileName: '42-2287.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2287.pdf',
      seriesIdArray: [33, 56, 57, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [1542]
    },
    {
      id: 168,
      name: 'Keyboard Tray',
      fileName: '242-7526.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7526.pdf',
      seriesIdArray: [17, 16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [975, 976, 1103, 1104, 1211]
    },
    {
      id: 169,
      name: 'Kickplate Installation',
      fileName: '42-2465.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2465.pdf',
      seriesIdArray: [39, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [2279, 2280, 2281, 3877]
    },
    {
      id: 170,
      name: 'Kickplate Installation',
      fileName: '56-0334.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0334.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [4053, 4054]
    },
    {
      id: 171,
      name: 'L-Shape End Panel',
      fileName: '56-0641.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0641.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3097, 3098, 3099, 3100, 3101, 3102, 3103, 3104]
    },
    {
      id: 172,
      name: 'Laminate End Panel with Bracket',
      fileName: '242-9809.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9809.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2403, 2404, 2434, 2435]
    },
    {
      id: 173,
      name: 'Laminate Modesty Panel',
      fileName: '242-9817.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9817.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2422, 2423, 2445, 2446, 2447, 2448]
    },
    {
      id: 174,
      name: 'Laminate X-Base Installation',
      fileName: '664-0028.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0028.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1689]
    },
    {
      id: 175,
      name: 'Lamp Shade Installation',
      fileName: '664-0247.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0247.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2184]
    },
    {
      id: 176,
      name: 'Lateral File Bookcase',
      fileName: '242-7527.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7527.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1078]
    },
    {
      id: 177,
      name: 'Lateral File Bookcase',
      fileName: '242-7670.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7670.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [897, 1173]
    },
    {
      id: 178,
      name: 'Lateral File Cabinet',
      fileName: '42-2306.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2306.pdf',
      seriesIdArray: [23, 35, 36, 42, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1396, 1397, 1402, 1403, 1404, 1405, 1406, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1428, 1429, 1430, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1514, 1515, 1516, 1517, 1520, 1521, 1522, 1523, 1524, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291]
    },
    {
      id: 179,
      name: 'Lateral File Installation',
      fileName: '42-2317.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2317.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1543, 1544, 1545, 1546, 1547, 1548, 1558, 1559, 1560, 1561, 1562, 1563, 1579, 1580, 1581, 1582, 1583, 1584, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212]
    },
    {
      id: 180,
      name: 'Lateral File Installation',
      fileName: '242-0152.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0152.pdf',
      seriesIdArray: [17, 32, 38, 56, 70, 33, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [881, 883, 970, 971, 972, 993, 1010, 1099, 1100, 1101, 1102, 1112, 1113, 1114, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2910, 2911, 2912, 3248, 3249, 4140, 4141, 4164, 4165, 4206, 4207]
    },
    {
      id: 181,
      name: 'Lateral File Installation',
      fileName: '242-7399.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7399.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1174, 1210, 1220]
    },
    {
      id: 182,
      name: 'Lateral File Installation',
      fileName: '242-7405.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7405.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1165]
    },
    {
      id: 183,
      name: 'Lateral Storage Unit',
      fileName: '42-2379.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2379.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 3819, 3820, 3821, 3822]
    },
    {
      id: 184,
      name: 'Lectern Installation',
      fileName: '664-0352.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0352.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4121]
    },
    {
      id: 185,
      name: 'LED Light Installation',
      fileName: '242-9813.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9813.pdf',
      seriesIdArray: [29, 70],
      serialNumberIdArray: [],
      basemodelIdArray: [2296, 2297, 2298, 2299]
    },
    {
      id: 186,
      name: 'Leg Installation',
      fileName: '664-0243.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0243.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2214, 2215, 2216, 2217, 2218, 2223, 2224, 2225, 2226, 2227, 2239, 2240, 2241]
    },
    {
      id: 187,
      name: 'Leveling Glides',
      fileName: '242-2500.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-2500.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2914, 2915, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2963, 2965, 2966, 2967, 2977, 2999, 3000, 3001, 3002, 3003, 3004, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019]
    },
    {
      id: 188,
      name: 'LH Modular Return- Brace Support (Full Skirt)',
      fileName: '242-7529.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7529.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1121, 1137]
    },
    {
      id: 189,
      name: 'Lock Kit Installation',
      fileName: '242-6944.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6944.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1151]
    },
    {
      id: 190,
      name: 'Lounge Chair Arm',
      fileName: '42-9501.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9501.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3299, 3300]
    },
    {
      id: 191,
      name: 'Lounge Chair Pie Connector',
      fileName: '42-9505.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9505.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3301]
    },
    {
      id: 192,
      name: 'Lumbar Installation',
      fileName: '56-0333.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0333.pdf',
      seriesIdArray: [64],
      serialNumberIdArray: [],
      basemodelIdArray: [3876]
    },
    {
      id: 193,
      name: 'Merge Packet',
      fileName: '343-1830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1830.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 238, 239, 240, 241, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 3816, 3817, 3818, 7566, 7905, 7906, 7907, 7916, 7925]
    },
    {
      id: 194,
      name: 'Mobile Pedestal',
      fileName: '42-2230.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2230.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1278, 1279, 1280]
    },
    {
      id: 195,
      name: 'Mobile Pedestal',
      fileName: '56-0336.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0336.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3901, 3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919, 3920, 3921, 3922, 3923, 3924, 3925, 3926, 3927, 3928, 3929, 3930, 3931, 3932]
    },
    {
      id: 196,
      name: 'Mobile Pedestal',
      fileName: '56-0638.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0638.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2870, 2871, 2872, 2873]
    },
    {
      id: 197,
      name: 'Mobile Pedestal',
      fileName: '242-7129.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7129.pdf',
      seriesIdArray: [56, 16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [875, 876, 877, 1159, 1160, 1161, 3246, 3247]
    },
    {
      id: 198,
      name: 'Mobile Pedestal',
      fileName: '242-9810.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9810.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2368, 2559]
    },
    {
      id: 199,
      name: 'Mobile Pedestal Handle',
      fileName: '42-2398.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2398.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [3266]
    },
    {
      id: 200,
      name: 'Mobile Table',
      fileName: '42-2391.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2391.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3302]
    },
    {
      id: 201,
      name: 'Mobile Table',
      fileName: '56-0471.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0471.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1060, 1061]
    },
    {
      id: 202,
      name: 'Modesty Panel',
      fileName: '242-9655.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9655.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4180]
    },
    {
      id: 203,
      name: 'Modesty Panel Installation',
      fileName: '664-1210.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1210.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2685, 2686]
    },
    {
      id: 204,
      name: 'Modular Credenza',
      fileName: '242-7067.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7067.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1678, 1679]
    },
    {
      id: 205,
      name: 'Modular Credenza',
      fileName: '242-8882.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8882.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1722]
    },
    {
      id: 206,
      name: 'Modular Credenza',
      fileName: '242-9083.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9083.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1141, 1143, 1145]
    },
    {
      id: 207,
      name: 'Modular Desk (10" Skirt)',
      fileName: '242-7231.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7231.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [967]
    },
    {
      id: 208,
      name: 'Modular Desk (10" Skirt)',
      fileName: '242-7232.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7232.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [969, 995]
    },
    {
      id: 209,
      name: 'Modular Desk (Full Skirt)',
      fileName: '242-7122.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7122.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [955, 956, 957, 968, 994, 1011, 1013, 1203, 1221, 1228, 1229]
    },
    {
      id: 210,
      name: 'Modular Desk (Full Skirt)',
      fileName: '242-7230.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7230.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [958, 1202]
    },
    {
      id: 211,
      name: 'Modular File Installation',
      fileName: '242-7650.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7650.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [865, 867, 1153, 1155]
    },
    {
      id: 212,
      name: 'Modular File Installation',
      fileName: '242-8887.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8887.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1726]
    },
    {
      id: 213,
      name: 'Modular Furniter Installation',
      fileName: '242-7088.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7088.pdf',
      seriesIdArray: [38, 56, 59],
      serialNumberIdArray: [],
      basemodelIdArray: [2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 3080, 3081, 3086, 3087, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3162, 3163, 3164, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3285, 3286, 4093, 4094, 4095, 4096, 4097]
    },
    {
      id: 214,
      name: 'Modular Reception Desk',
      fileName: '242-9850.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9850.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1021]
    },
    {
      id: 215,
      name: 'Modular Reception Return',
      fileName: '242-9851.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9851.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1022]
    },
    {
      id: 216,
      name: 'Modular Return (10" Skirt)',
      fileName: '242-7250.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7250.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [992, 1000, 1009]
    },
    {
      id: 217,
      name: 'Modular Return (10" Skirt)',
      fileName: '242-9082.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9082.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1124, 1126, 1128, 1130, 1132, 1134]
    },
    {
      id: 218,
      name: 'Modular Return (Full Skirt)',
      fileName: '242-7069.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7069.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1680, 1681]
    },
    {
      id: 219,
      name: 'Modular Return (Full Skirt)',
      fileName: '242-7220.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7220.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [991, 996, 998, 999, 1219, 1224, 1225]
    },
    {
      id: 220,
      name: 'Modular Return (Full Skirt)',
      fileName: '242-7523.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7523.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1127, 1129, 1131, 1133]
    },
    {
      id: 221,
      name: 'Modular Return- Brace Support (10" Skirt)',
      fileName: '242-7252.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7252.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1002, 1004, 1006, 1008]
    },
    {
      id: 222,
      name: 'Modular Return- Brace Support (10" Skirt)',
      fileName: '242-9081.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9081.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1120, 1122, 1136, 1138]
    },
    {
      id: 223,
      name: 'Modular Return- Brace Support (Full Skirt)',
      fileName: '242-7247.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7247.pdf',
      seriesIdArray: [56],
      serialNumberIdArray: [],
      basemodelIdArray: [3287, 3288, 3289, 3290, 3291, 3292]
    },
    {
      id: 224,
      name: 'Modular Return- Brace Support (Full Skirt)',
      fileName: '242-7667.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7667.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1001, 1003, 1005, 1007, 1226, 1227]
    },
    {
      id: 225,
      name: 'Modular Short Leg',
      fileName: '242-7201.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7201.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [872, 873]
    },
    {
      id: 226,
      name: 'Nesting Leg Installation',
      fileName: '664-1203.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1203.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2697, 2699, 2701, 2703, 2705, 2720, 2723, 2727, 2730, 2734, 2737, 2740, 2743, 2747, 2750, 2753, 2757, 2760, 2763, 2767, 2770, 2772, 2774, 2777, 2780, 2784, 2787, 2790, 2794, 2797, 2800, 2804, 2807, 2809, 2811, 2814, 2817, 2820, 2822, 2824, 2826, 2828, 2830]
    },
    {
      id: 227,
      name: 'Non-Locking to Locking Door Conversion',
      fileName: '242-8880.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8880.pdf',
      seriesIdArray: [34, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [904, 905, 1268, 1269]
    },
    {
      id: 228,
      name: 'O-Leg Installation',
      fileName: '242-9821.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9821.pdf',
      seriesIdArray: [70, 39],
      serialNumberIdArray: [],
      basemodelIdArray: [2375, 2438, 2470, 2471, 3829, 3830, 3831]
    },
    {
      id: 229,
      name: 'Occasional Table',
      fileName: '242-6910.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6910.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [1486, 1487, 1488]
    },
    {
      id: 230,
      name: 'Occasional Table',
      fileName: '242-8849.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8849.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [1399, 1400, 1401]
    },
    {
      id: 231,
      name: 'Occasional Table',
      fileName: '242-9669.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9669.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4181]
    },
    {
      id: 232,
      name: 'Optimize Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [9],
      serialNumberIdArray: [],
      basemodelIdArray: [496, 7574, 7575, 7576, 7577, 7578, 7579, 7580, 7581, 7582, 7583, 7584, 7585, 7586, 7587, 7588, 7589, 7590, 7591, 7592, 7593, 7594, 7595, 7596, 7597, 7598, 7599, 7600, 7601, 7602, 7603, 7604, 7605, 7606, 7607, 7608, 7609, 7610, 7611, 7612, 7613, 7614, 7615, 7616, 7617, 7618, 7619, 7620, 7621, 7622, 7623, 7624, 7625, 7626, 7627, 7628, 7629, 7630, 7631, 7632, 7633, 7634, 7635, 7636, 7637, 7638, 7639, 7640, 7641, 7642, 7643, 7644, 7645, 7646, 7647, 7648, 7649, 7650, 7651, 7652, 7653, 7654, 7655, 7656, 7657, 7658, 7659, 7660, 7661, 7662, 7663, 7664, 7665, 7666, 7667, 7668, 7669, 7670, 7671, 7672, 7673, 7674, 7675, 7676, 7677, 7678, 7679, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7831, 7832, 7833, 7834, 7835, 7836, 7837, 7838, 7839, 7840, 7841, 7848]
    },
    {
      id: 233,
      name: 'Organizer',
      fileName: '242-6722.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6722.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [940, 943]
    },
    {
      id: 234,
      name: 'Organizer',
      fileName: '242-9140.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9140.pdf',
      seriesIdArray: [56, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [2869, 3244]
    },
    {
      id: 235,
      name: 'Over File',
      fileName: '42-2440.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2440.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [1603, 1604, 1605]
    },
    {
      id: 236,
      name: 'Overhead  Installation',
      fileName: '143-1601.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1601.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2681]
    },
    {
      id: 237,
      name: 'Overhead and Shelf',
      fileName: '56-0196.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0196.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2003, 2004, 2005, 2006, 2007, 2008, 2009]
    },
    {
      id: 238,
      name: 'Overhead Panel Mount',
      fileName: '242-9808.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9808.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2472]
    },
    {
      id: 239,
      name: 'Panel Support Bracket',
      fileName: '143-0201.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0201.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1710]
    },
    {
      id: 240,
      name: 'Panel System Installation Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2261, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3832, 4134, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 7939, 7940, 7941, 7942, 7943, 7944, 7945, 7946, 7947, 7948, 7949, 7950, 7951, 7952, 7953, 7954, 7955, 7956, 7957, 7958, 7959, 7960, 7961, 7962]
    },
    {
      id: 241,
      name: 'Paper Management Shelf',
      fileName: '242-7193.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7193.pdf',
      seriesIdArray: [16, 56, 68, 34, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [2634]
    },
    {
      id: 242,
      name: 'Peninsula',
      fileName: '42-2362.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2362.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1371, 1372, 1381]
    },
    {
      id: 243,
      name: 'Peninsula',
      fileName: '242-0009.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0009.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1073, 1074]
    },
    {
      id: 244,
      name: 'Peninsula',
      fileName: '242-6943.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6943.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [886, 887, 888, 889, 890, 892, 893, 1169, 1170, 1171, 1172]
    },
    {
      id: 245,
      name: 'Peninsula',
      fileName: '242-9662.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9662.pdf',
      seriesIdArray: [33, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [4155, 4196, 4197]
    },
    {
      id: 246,
      name: 'Peninsula Leg Column Retrofit',
      fileName: '242-9431.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9431.pdf',
      seriesIdArray: [56],
      serialNumberIdArray: [],
      basemodelIdArray: [3218]
    },
    {
      id: 247,
      name: 'Peninsula Modesty Panel',
      fileName: '242-6940.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6940.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [894]
    },
    {
      id: 248,
      name: 'Peninsula/Jetty/Boomerang',
      fileName: '242-7226.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7226.pdf',
      seriesIdArray: [56, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [2964, 2968, 2998, 3025, 3026, 3027, 3028, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217]
    },
    {
      id: 249,
      name: 'Personal File Center',
      fileName: '42-2375.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2375.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212]
    },
    {
      id: 250,
      name: 'Personal Storage Tower',
      fileName: '42-2376.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2376.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [3981, 3982, 3983, 3984, 3985, 3986, 3987, 3988, 3989, 3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998, 3999, 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036, 4037, 4038, 4039, 4040, 4041, 4042, 4043, 4044, 4045, 4046, 4047, 4048, 4049, 4050, 4051, 4052]
    },
    {
      id: 251,
      name: 'Personal Table',
      fileName: '664-0249.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0249.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2236, 2237]
    },
    {
      id: 252,
      name: 'Pie End Cap Bookshelf 29 1/2" H',
      fileName: '242-7126.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7126.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [977]
    },
    {
      id: 253,
      name: 'Pie End Cap Bookshelf 37 1/8" H',
      fileName: '242-7292.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7292.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [978, 1212]
    },
    {
      id: 254,
      name: 'Pie End Cap Bookshelf 66 5/8" H',
      fileName: '242-7669.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7669.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [979, 1213]
    },
    {
      id: 255,
      name: 'Post Leg Installation',
      fileName: '242-9824.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9824.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2430]
    },
    {
      id: 256,
      name: 'Prefix Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [7480, 7481, 7482, 7483, 7484, 7485, 7486, 7487, 7488, 7489, 7490, 7491, 7492, 7493, 7494, 7495, 7496, 7497, 7498, 7499, 7500, 7501, 7502, 7503, 7504, 7505, 7506, 7507, 7508, 7509, 7510, 7511, 7512, 7513, 7514, 7515, 7516, 7517, 7518, 7519, 7520, 7521, 7522, 7523, 7524, 7525, 7526, 7527, 7528, 7529, 7530, 7531, 7532, 7533, 7534, 7535, 7536, 7537, 7538, 7539, 7540, 7541, 7542, 7543, 7544, 7545, 7546, 7547, 7548, 7549, 7550, 7551, 7552, 7553, 7554, 7555, 7556, 7557, 7558, 7559, 7560, 7561, 7562, 7563, 7564, 7565]
    },
    {
      id: 257,
      name: 'Presentation Cart',
      fileName: '664-1205.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1205.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716]
    },
    {
      id: 258,
      name: 'Printer Cart',
      fileName: '242-7666.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7666.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [997]
    },
    {
      id: 259,
      name: 'Pull Installation',
      fileName: '242-9801.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9801.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2364, 2365, 2366, 2367, 2379, 2380, 2381, 2385, 2386, 2400, 2414, 2415, 2416, 2420, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2562, 2579, 2580, 2581, 2608, 2609]
    },
    {
      id: 260,
      name: 'Queen Anne Base Table',
      fileName: '242-0065.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0065.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1606]
    },
    {
      id: 261,
      name: 'Quick Connectors',
      fileName: '143-0203.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0203.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1712, 1713]
    },
    {
      id: 262,
      name: 'Raceway to Panel Foot Conversion Kit',
      fileName: '56-0415.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0415.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3494]
    },
    {
      id: 263,
      name: 'Reception Return',
      fileName: '242-9078.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9078.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1688]
    },
    {
      id: 264,
      name: 'Reception Station',
      fileName: '56-0642.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0642.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3065, 3067]
    },
    {
      id: 265,
      name: 'Reception Station',
      fileName: '242-0101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0101.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1638, 1639]
    },
    {
      id: 266,
      name: 'Reception Station',
      fileName: '242-7294.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7294.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1018, 1234]
    },
    {
      id: 267,
      name: 'Reception Station',
      fileName: '242-7396.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7396.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1116]
    },
    {
      id: 268,
      name: 'Reception Station',
      fileName: '242-9077.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9077.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1687]
    },
    {
      id: 269,
      name: 'Reception Station',
      fileName: '242-9141.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9141.pdf',
      seriesIdArray: [56, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [3066, 3068, 3245]
    },
    {
      id: 270,
      name: 'Reception Station',
      fileName: '242-9657.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9657.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [3264]
    },
    {
      id: 271,
      name: 'Reception Station Return',
      fileName: '242-9658.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9658.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [3265]
    },
    {
      id: 272,
      name: 'Reception Station- "L" Worksurface',
      fileName: '242-7397.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7397.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1117, 1118]
    },
    {
      id: 273,
      name: 'Removable Modesty Panel',
      fileName: '242-9645.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9645.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4142, 4143, 4144, 4146]
    },
    {
      id: 274,
      name: 'Return Assembly',
      fileName: '42-2364.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2364.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380]
    },
    {
      id: 275,
      name: 'Return Installation',
      fileName: '242-7123.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7123.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [878, 879, 880, 882, 1032, 1033, 1037, 1038, 1162, 1163, 1164, 1166, 1254]
    },
    {
      id: 276,
      name: 'Return Reception Station',
      fileName: '242-7295.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7295.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1019, 1020]
    },
    {
      id: 277,
      name: 'Return Stack-On Unit',
      fileName: '242-7421.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7421.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1083, 1084]
    },
    {
      id: 278,
      name: 'RH Modular Return- Brace Support (Full Skirt)',
      fileName: '242-7528.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7528.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1119, 1135]
    },
    {
      id: 279,
      name: 'Round and Square Table',
      fileName: '42-2393.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2393.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [3294, 3295, 3296]
    },
    {
      id: 280,
      name: 'Shared Overhead Mounting Brackets',
      fileName: '242-9847.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9847.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2473, 2474]
    },
    {
      id: 281,
      name: 'Shared Overhead Post Legs',
      fileName: '242-9846.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9846.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2363, 2399]
    },
    {
      id: 282,
      name: 'Shelf Adjustment',
      fileName: '42-2648.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2648.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [3811, 3812, 3813, 3814, 3815]
    },
    {
      id: 283,
      name: 'Shelf and Tray',
      fileName: '143-1150.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1150.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2682]
    },
    {
      id: 284,
      name: 'Shelf File Installation',
      fileName: '42-2685.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2685.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [1411, 1412, 1413, 1414, 1415, 1416, 2277, 2278]
    },
    {
      id: 285,
      name: 'Slab End Panel',
      fileName: '242-9802.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9802.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2372, 2402, 2433]
    },
    {
      id: 286,
      name: 'Sliding Door Installation',
      fileName: '143-0133.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0133.pdf',
      seriesIdArray: [67, 27],
      serialNumberIdArray: [],
      basemodelIdArray: [2262, 2263, 2264, 2265, 2266]
    },
    {
      id: 287,
      name: 'Sliding Door Installation',
      fileName: '242-9829.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9829.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2338, 2340, 2342, 2344, 2347, 2348, 2349, 2352, 2353, 2356, 2357, 2358, 2361, 2362, 2364, 2365, 2366, 2367, 2540, 2542, 2544, 2546, 2547, 2549, 2550, 2552, 2553, 2555, 2556, 2558]
    },
    {
      id: 288,
      name: 'Small Credenza Installation',
      fileName: '242-9848.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9848.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2376, 2377, 2378, 2382, 2383, 2384]
    },
    {
      id: 289,
      name: 'Square End Cap Bookshelf 29 1/2" H',
      fileName: '242-9564.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9564.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [980, 981]
    },
    {
      id: 290,
      name: 'Square End Cap Bookshelf 66 5/8" H',
      fileName: '242-9565.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9565.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [982, 983]
    },
    {
      id: 291,
      name: 'Stack-On Bookcase',
      fileName: '242-0026.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0026.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1621]
    },
    {
      id: 292,
      name: 'Stack-On Cabinet Installation',
      fileName: '56-0472.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0472.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [906, 908, 910, 911]
    },
    {
      id: 293,
      name: 'Stack-On Cabinet with Center Shelves',
      fileName: '56-0476.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0476.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [909]
    },
    {
      id: 294,
      name: 'Stack-On Cabinet with Tired Shelves',
      fileName: '56-0473.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0473.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [907]
    },
    {
      id: 295,
      name: 'Stack-On Door Lock',
      fileName: '242-9115.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9115.pdf',
      seriesIdArray: [16, 25, 68, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [916, 924, 928, 932, 1084, 1086, 1087, 1089, 1091, 1183, 1185, 1187, 1620, 1624]
    },
    {
      id: 296,
      name: 'Stack-On Ganging Panel',
      fileName: '242-9561.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9561.pdf',
      seriesIdArray: [38, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [936, 3029]
    },
    {
      id: 297,
      name: 'Stack-On Organizer',
      fileName: '242-0044.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0044.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1150]
    },
    {
      id: 298,
      name: 'Stack-On Unit',
      fileName: '242-0027.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0027.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1619, 1620, 1622]
    },
    {
      id: 299,
      name: 'Stack-On Unit',
      fileName: '242-6942.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6942.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1186, 1187, 1188, 1189]
    },
    {
      id: 300,
      name: 'Stack-On Unit',
      fileName: '242-7075.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7075.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1685, 1686]
    },
    {
      id: 301,
      name: 'Stack-On Unit',
      fileName: '242-7289.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7289.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1184, 1185, 1190]
    },
    {
      id: 302,
      name: 'Stack-On Unit',
      fileName: '242-7299.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7299.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [1182, 1183]
    },
    {
      id: 303,
      name: 'Stack-On Unit',
      fileName: '242-7416.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7416.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1088, 1089, 1090, 1091]
    },
    {
      id: 304,
      name: 'Stack-On Unit',
      fileName: '242-8888.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8888.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1727]
    },
    {
      id: 305,
      name: 'Stack-On Unit',
      fileName: '242-9556.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9556.pdf',
      seriesIdArray: [16, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [918, 920, 922, 924, 926, 928, 930, 932, 934, 938, 1191, 1192, 1193]
    },
    {
      id: 306,
      name: 'Stack-On Unit',
      fileName: '242-9557.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9557.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [916]
    },
    {
      id: 307,
      name: 'Stack-On Unit',
      fileName: '242-9558.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9558.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [912, 914]
    },
    {
      id: 308,
      name: 'Stack-On Unit',
      fileName: '242-9641.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9641.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [919, 923, 927, 931, 937]
    },
    {
      id: 309,
      name: 'Stack-On Unit',
      fileName: '242-9643.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9643.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [913]
    },
    {
      id: 310,
      name: 'Stack-On Unit',
      fileName: '242-9683.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9683.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [],
      basemodelIdArray: [2306, 2307]
    },
    {
      id: 311,
      name: 'Stack-On Unit Installation',
      fileName: '242-0090.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0090.pdf',
      seriesIdArray: [32, 38, 70, 33, 56, 25],
      serialNumberIdArray: [],
      basemodelIdArray: [1607, 2346, 2349, 2351, 2353, 2355, 2358, 2360, 2362, 2969, 2970, 2971, 2974, 2975, 2976, 2978, 2979, 2980, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2993, 2997, 3020, 3024, 3030, 3031, 3034, 3035, 3036, 3037, 3038, 3039, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3251, 3252, 3293, 4145, 4188]
    },
    {
      id: 312,
      name: 'Stack-On Unit Installation',
      fileName: '242-9660.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9660.pdf',
      seriesIdArray: [33, 56, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [3184, 3185, 3186, 3187, 3188, 3189, 4166, 4167, 4168, 4169, 4175, 4176, 4177, 4178, 4179, 4215, 4216, 4217, 4218, 4219, 4220]
    },
    {
      id: 313,
      name: 'Standing Height Pedestal',
      fileName: '56-0406.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0406.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2419, 2443]
    },
    {
      id: 314,
      name: 'StationMaster',
      fileName: '43-0602.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/43-0602.pdf',
      seriesIdArray: [66],
      serialNumberIdArray: [],
      basemodelIdArray: [1426, 1427, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442]
    },
    {
      id: 315,
      name: 'Steel Bookshelf Installation',
      fileName: '143-0204.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0204.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1715, 1716, 1717, 1718, 1719, 1720]
    },
    {
      id: 316,
      name: 'Storage Cabinet Installation',
      fileName: '42-2311.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2311.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [3823, 3824, 3825]
    },
    {
      id: 317,
      name: 'Storage Cabinet Installation',
      fileName: '242-0042.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0042.pdf',
      seriesIdArray: [56, 16, 68, 25, 34, 17, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [898, 902, 903, 904, 905, 1079, 1082, 1174, 1179, 1264, 1265, 1266, 1267, 1268, 1269, 1637, 2892, 2893, 2894, 2895, 2896, 2897, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 3253, 3254, 3255, 3256, 3257]
    },
    {
      id: 318,
      name: 'Storage Cube',
      fileName: '242-9812.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9812.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2328]
    },
    {
      id: 319,
      name: 'Stride Benching Packet',
      fileName: '343-2555.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2555.pdf',
      seriesIdArray: [10],
      serialNumberIdArray: [],
      basemodelIdArray: [10253, 10254, 10255, 10256, 10257, 10258, 10259, 10260, 10261, 10262, 10263, 10264, 10265, 10266, 10267, 10268, 10269, 10270, 10271, 10272, 10273, 10274, 10275, 10276, 10277, 10278, 10279, 10280, 10436, 10437, 10438, 10439, 10440, 10441, 10442, 10447, 10448, 10450]
    },
    {
      id: 320,
      name: 'Stride Desking Packet',
      fileName: '343-2375.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2375.pdf',
      seriesIdArray: [11],
      serialNumberIdArray: [],
      basemodelIdArray: [9, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 7567, 7568, 7569, 7570, 7571, 7572, 7573, 7917, 9903, 9904, 9905, 9910, 9911, 9912, 9916, 9917, 9918, 9922, 9923, 9924, 9928, 9929, 9930, 9934, 9935, 9936, 9940, 9941, 9942, 9945, 9946, 9947, 9948, 9949, 9950, 9951, 9952, 9953, 9954, 9955, 9956, 9957, 9958, 9959, 9960, 9961, 9962, 9963, 9964, 9985, 9986, 9987, 9992, 9993, 9994, 9998, 9999, 10000, 10003, 10004, 10005, 10006, 10007, 10009, 10010, 10011, 10016, 10017, 10018, 10022, 10023, 10024, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10039, 10040, 10041, 10045, 10046, 10047, 10050, 10051, 10052, 10053, 10054, 10059, 10060, 10061, 10065, 10066, 10067, 10070, 10071, 10072, 10073, 10074, 10078, 10079, 10080, 10084, 10085, 10086, 10089, 10090, 10091, 10092, 10093, 10097, 10098, 10099, 10103, 10104, 10105, 10108, 10109, 10110, 10111, 10112, 10114, 10115, 10116, 10120, 10121, 10122, 10125, 10126, 10127, 10128, 10129, 10141, 10142, 10143, 10146, 10147, 10148, 10149, 10150, 10152, 10153, 10154, 10157, 10158, 10159, 10160, 10161, 10163, 10164, 10165, 10168, 10169, 10170, 10171, 10172, 10174, 10175, 10176, 10179, 10180, 10181, 10182, 10183, 10185, 10186, 10187, 10190, 10191, 10192, 10193, 10194, 10196, 10197, 10198, 10201, 10202, 10203, 10204, 10205, 10207, 10208, 10209, 10212, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10225, 10226, 10227, 10228, 10229, 10230, 10231, 10232, 10233, 10234, 10235, 10236, 10237, 10238, 10239, 10240, 10241, 10242, 10243, 10244, 10245, 10246, 10247, 10248, 10249, 10250, 10251, 10252, 10281, 10282, 10283, 10284, 10285, 10286, 10287, 10288, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10310, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10321, 10322, 10323, 10324, 10325, 10326, 10327, 10328, 10329, 10330, 10331, 10332, 10333, 10334, 10335, 10336, 10337, 10338, 10339, 10340, 10341, 10342, 10343, 10344, 10345, 10346, 10347, 10348, 10349, 10350, 10351, 10352, 10353, 10354, 10355, 10356, 10357, 10358, 10359, 10360, 10361, 10362, 10363, 10364, 10365, 10366, 10367, 10368, 10369, 10370, 10371, 10372, 10373, 10374, 10375, 10376, 10377, 10378, 10379, 10380, 10381, 10382, 10383, 10384, 10385, 10386, 10387, 10388, 10389, 10390, 10391, 10392, 10393, 10394, 10395, 10396, 10397, 10398, 10399, 10400, 10401, 10402, 10403, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411, 10412, 10413, 10414, 10415, 10416, 10417, 10418, 10419, 10420, 10421, 10422, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10431, 10432, 10433, 10434, 10435, 10443, 10444, 10449, 10451, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10459, 10460, 10461, 10462, 10463, 10464, 10465, 10466, 10467, 10468, 10469, 10470, 10471, 10472, 10473, 10474, 10475, 10476, 10477, 10478, 10479, 10480, 10481, 10482, 10483, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10491, 10492, 10493, 10494, 10495, 10496, 10497, 10498, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10517, 10518, 10519, 10520, 10521, 10522, 10523, 10524, 10525, 10526, 10527, 10528, 10529, 10530, 10531, 10532, 10533, 10534, 10535, 10536, 10537, 10538, 10539, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 10562, 10563, 10564, 10565, 10566, 10567, 10568, 10569, 10570, 10571, 10572, 10573, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 10581, 10582, 10583, 10584, 10585, 10586, 10587, 10588, 10589, 10590, 10591, 10592, 10593, 10594, 10595, 10596, 10597, 10598, 10599, 10600, 10601, 10602, 10603, 10604, 10605, 10606, 10607, 10608, 10609, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10617, 10618, 10619, 10620, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10647, 10648, 10649, 10650, 10651, 10652, 10653, 10654, 10655, 10656, 10657, 10658, 10659, 10660, 10661, 10662, 10663, 10664, 10665, 10666, 10667, 10668, 10669, 10670, 10671, 10672, 10673, 10674, 10675, 10676, 10677, 10678, 10679, 10680, 10681, 10682, 10683, 10684, 10685, 10686, 10687, 10688, 10689, 10690, 10691, 10692, 10693, 10694, 10695, 10696, 10697, 10698, 10699, 10700, 10701, 10702, 10703, 10704, 10705, 10706, 10707, 10708, 10709, 10710, 10711, 10712, 10713, 10714, 10715, 10717, 10718, 10719, 10720, 10721, 10722, 10723, 10724, 10725, 10726, 10727, 10728, 10729, 10730, 10731, 10732, 10733, 10734, 10735, 10736, 10737, 10738, 10739, 10740, 10789, 10790, 10798, 10799, 10802, 10803, 10806, 10807, 10810, 10811, 10814, 10815, 10818, 10819, 10826, 10827, 10830, 10831, 10834, 10835, 10838, 10839, 10842, 10843, 10846, 10847, 10850, 10851, 10854, 10855, 10858, 10859, 10862, 10863, 10905, 10906, 10910, 10911, 10914, 10915, 10922, 10923, 10925, 10926, 10928, 10929, 10933, 10934, 10937, 10938, 10941, 10942, 10944, 10945, 10946, 10947, 10951, 10952, 10955, 10956, 10959, 10960, 10962, 10963, 10967, 10968, 10971, 10972, 10975, 10976, 10978, 10979, 10983, 10984, 10987, 10988, 10991, 10992, 10994, 10995, 10999, 11000, 11003, 11004, 11007, 11008, 11010, 11011, 11015, 11016, 11019, 11020, 11023, 11024, 11026, 11027, 11040, 11041, 11046, 11047, 11049, 11050, 11052, 11053, 11056, 11057, 11059, 11060, 11062, 11063, 11066, 11067, 11069, 11070, 11072, 11073, 11076, 11077, 11079, 11080, 11082, 11083, 11086, 11087, 11089, 11090, 11092, 11093, 11096, 11097, 11099, 11100, 11102, 11103, 11106, 11107, 11109, 11110, 11116, 11117, 11120, 11121, 11124, 11125, 11128, 11129, 11132, 11133, 11136, 11137, 11140, 11141, 11144, 11145, 11148, 11149, 11152, 11153, 11253, 11254, 11255, 11256, 11257, 11258]
    },
    {
      id: 321,
      name: 'Stride Panels Packet',
      fileName: '343-2152H.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2152H.pdf',
      seriesIdArray: [12],
      serialNumberIdArray: [],
      basemodelIdArray: [9748, 9749, 9750, 9751, 9752, 9753, 9754, 9755, 9756, 9757, 9758, 9759, 9760, 9761, 9762, 9763, 9764, 9765, 9766, 9767, 9768, 9769, 9770, 9771, 9772, 9773, 9774, 9775, 9776, 9777, 9778, 9779, 9780, 9781, 9782, 9783, 9784, 9785, 9786, 9787, 9788, 9789, 9790, 9791, 9792, 9793, 9794, 9795, 9796, 9797, 9798, 9799, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9812, 9813, 9814, 9815, 9816, 9817, 9818, 9819, 9820, 9821, 9822, 9823, 9824, 9825, 9826, 9827, 9828, 9829, 9830, 9831, 9832, 9833, 9834, 9835, 9836, 9837, 9838, 9839, 9840, 9841, 9842, 9843, 9844, 9845, 9846, 9847, 9848, 9849, 9850, 9851, 9852, 9853, 9854, 9855, 9856, 9857, 9858, 9859, 9860, 9861, 9862, 9863, 9864, 9865, 9866, 9867, 9868, 9869, 9870, 9871, 9872, 9873]
    },
    {
      id: 322,
      name: 'Student Desk',
      fileName: '143-0102.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0102.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2293, 2294, 2295]
    },
    {
      id: 323,
      name: 'Support Panel Installation',
      fileName: '56-0643.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0643.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2831]
    },
    {
      id: 324,
      name: 'Support Storage Installation',
      fileName: '242-9823.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9823.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [2370, 2371, 2401, 2405, 2406, 2408, 2409, 2410, 2411, 2412, 2413, 2431, 2432, 2436, 2437, 2439, 2440, 2560, 2561, 2575, 2576, 2577, 2578, 2582, 2583]
    },
    {
      id: 325,
      name: 'Surpass Packet',
      fileName: '3090198000REV_D.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3090198000REV_D.pdf',
      seriesIdArray: [72],
      serialNumberIdArray: [],
      basemodelIdArray: [6575, 6576, 6577, 6578, 6579, 6580, 6581, 6582, 6583, 6584, 6585, 6586, 6587, 6588, 6589, 6590, 6591, 6592, 6593, 6594, 6595, 6596, 6597, 6598, 6599, 6600, 6601, 6602, 6603, 6604, 6605, 6606, 6607, 6608, 6609, 6610, 6611, 6612, 6613, 6614, 6615, 6616, 6617, 6618, 6619, 6620, 6621, 6622, 6623, 6624, 6625, 6626, 6627, 6628, 6629, 6630, 6631, 6632, 6633, 6634, 6635, 6636, 6637, 6638, 6639, 6640, 6641, 6642, 6643, 6644, 6645, 6646, 6647, 6648, 6649, 6650, 6651, 6652, 6653, 6654, 6655, 6656, 6657, 6658, 6659, 6660, 6661, 6662, 6663, 6664, 6665, 6666, 6667, 6668, 6669, 6670, 6671, 6672, 6673, 6674, 6675, 6676, 6677, 6678, 6679, 6680, 6681, 6682, 6683, 6684, 6685, 6686, 6687, 6688, 6689, 6690, 6691, 6692, 6693, 6694, 6695, 6696, 6697, 6698, 6699, 6700, 6701, 6702, 6703, 6704, 6705, 6706, 6707, 6708, 6709, 6710, 6711, 6712, 6713, 6714, 6715, 6716, 6717, 6718, 6719, 6720, 6721, 6722, 6723, 6724, 6725, 6726, 6727, 6728, 6729, 6730, 6731, 6732, 6733, 6734, 6735, 6736, 6737, 6738, 6739, 6740, 6741, 6742, 6743, 6744, 6745, 6746, 6747, 6748, 6749, 6750, 6751, 6752, 6753, 6754, 6755, 6756, 6757, 6758, 6759, 6760, 6761, 6762, 6763, 6764, 6765, 6766, 6767, 6768, 6769, 6770, 6771, 6772, 6773, 6774, 6775, 6776, 6777, 6778, 6779, 6780, 6781, 6782, 6783, 6784, 6785, 6786, 6787, 6788, 6789, 6790, 6791, 6792, 6793, 6794, 6795, 6796, 6797, 6798, 6799, 6800, 6801, 6802, 6803, 6804, 6805, 6806, 6807, 6808, 6809, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 6817, 6818, 6819, 6820, 6821, 6822, 6823, 6824, 6825, 6826, 6827, 6828, 6829, 6830, 6831, 6832, 6833, 6834, 6835, 6836, 6837, 6838, 6839, 6840, 6841, 6842, 6843, 6844, 6845, 6846, 6847, 6848, 6849, 6850, 6851, 6852, 6853, 6854, 6855, 6856, 6857, 6858, 6859, 6860, 6861, 6862, 6863, 6864, 6865, 6866, 6867, 6868, 6869, 6870, 6871, 6872, 6873, 6874, 6875, 6876, 6877, 6878, 6879, 6880, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6888, 6889, 6890, 6891, 6892, 6893, 6894, 6895, 6896, 6897, 6898, 6899, 6900, 6901, 6902, 6903, 6904, 6905, 6906, 6907, 6908, 6909, 6910, 6911, 6912, 6913, 6914, 6915, 6916, 6917, 6918, 6919, 6920, 6921, 6922, 6923, 6924, 6925, 6926, 6927, 6928, 6929, 6930, 6931, 6932, 6933, 6934, 6935, 6936, 6937, 6938, 6939, 6940, 6941, 6942, 6943, 6944, 6945, 6946, 6947, 6948, 6949, 6950, 6951, 6952, 6953, 6954, 6955, 6956, 6957, 6958, 6959, 6960, 6961, 6962, 6963, 6964, 6965, 6966, 6967, 6968, 6969, 6970, 6971, 6972, 6973, 6974, 6975, 6976, 6977, 6978, 6979, 6980, 6981, 6982, 6983, 6984, 6985, 6986, 6987, 6988, 6989, 6990, 6991, 6992, 6993, 6994, 6995, 6996, 6997, 6998, 6999, 7000, 7001, 7002, 7003, 7004, 7005, 7006, 7007, 7008, 7009, 7010, 7011, 7012, 7013, 7014, 7015, 7016, 7017, 7018, 7019, 7020, 7021, 7022, 7023, 7024, 7025, 7026, 7027, 7028, 7029, 7030, 7031, 7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7041, 7042, 7043, 7044, 7045, 7046, 7047, 7048, 7049, 7050, 7051, 7052, 7053, 7054, 7055, 7056, 7057, 7058, 7059, 7060, 7061, 7062, 7063, 7064, 7065, 7066, 7067, 7068, 7069, 7070, 7071, 7072, 7073, 7074, 7075, 7076, 7077, 7078, 7079, 7080, 7081, 7082, 7083, 7084, 7085, 7086, 7087, 7088, 7089, 7090, 7091, 7092, 7093, 7094, 7095, 7096, 7097, 7098, 7099, 7100, 7101, 7102, 7103, 7104, 7105, 7106, 7107, 7108, 7109, 7110, 7111, 7112, 7113, 7114, 7115, 7116, 7117, 7118, 7119, 7120, 7121, 7122, 7123, 7124, 7125, 7126, 7127, 7128, 7129, 7130, 7131, 7132, 7133, 7134, 7135, 7136, 7137, 7138, 7139, 7140, 7141, 7142, 7143, 7144, 7145, 7146, 7147, 7148, 7149, 7150, 7151, 7152, 7153, 7154, 7155, 7156, 7157, 7158, 7159, 7160, 7161, 7162, 7163, 7164, 7165, 7166, 7167, 7168, 7169, 7170, 7171, 7172, 7173, 7174, 7175, 7176, 7177, 7178, 7179, 7180, 7181, 7182, 7183, 7184, 7185, 7186, 7187, 7188, 7189, 7190, 7191, 7192, 7193, 7194, 7195, 7196, 7197, 7198, 7199, 7200, 7201, 7202, 7203, 7204, 7205, 7206, 7207, 7208, 7209, 7210, 7211, 7212, 7213, 7214, 7215, 7216, 7217, 7218, 7219, 7220, 7221, 7222, 7223, 7224, 7225, 7226, 7227, 7228, 7229, 7230, 7231, 7232, 7233, 7234, 7235, 7236, 7237, 7238, 7239, 7240, 7241, 7242, 7243, 7244, 7245, 7246, 7247, 7248, 7249, 7250, 7251, 7252, 7253, 7254, 7255, 7256, 7257, 7258, 7259, 7260, 7261, 7262, 7263, 7264, 7265, 7266, 7267, 7268, 7269, 7270, 7271, 7272, 7273, 7274, 7275, 7276, 7277, 7278, 7279, 7280, 7281, 7282, 7283, 7284, 7285, 7286, 7287, 7288, 7289, 7290, 7291, 7292, 7293, 7294, 7295, 7296, 7297, 7298, 7299, 7300, 7301, 7302, 7303, 7304, 7305, 7306, 7307, 7308, 7309, 7310, 7311, 7312, 7313, 7314, 7315, 7316, 7317, 7318, 7319, 7320, 7321, 7322, 7323, 7324, 7325, 7326, 7327, 7328, 7329, 7330, 7331, 7332, 7333, 7334, 7335, 7336, 7337, 7338, 7339, 7340, 7341, 7342, 7343, 7344, 7345, 7346, 7347, 7348, 7349, 7350, 7351, 7352, 7353, 7354, 7355, 7356, 7357, 7358, 7359, 7360, 7361, 7362, 7363, 7364, 7365, 7366, 7367, 7368, 7369, 7370, 7371, 7372, 7373, 7374, 7375, 7376, 7377, 7378, 7379, 7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, 7388, 7389, 7390, 7391, 7392, 7393, 7394, 7395, 7396, 7397, 7398, 7399, 7400, 7401, 7402, 7403, 7404, 7405, 7406, 7407, 7408, 7409, 7410, 7411, 7412, 7413, 7414, 7415, 7416, 7417, 7418, 7419, 7420, 7421, 7422, 7423, 7424, 7425, 7426, 7427, 7428, 7429, 7430, 7431, 7432, 7433, 7434, 7435, 7436, 7437, 7438, 7439, 7440, 7441, 7442, 7443, 7444, 7445, 7446, 7447, 7448, 7449, 7450, 7451, 7452, 7453, 7454, 7455, 7456, 7457, 7458, 7459, 7460, 7461, 7462, 7463, 7464, 7465, 7466, 7467, 7468, 7469, 7470, 7471, 7472, 7473, 7474, 7475, 7476, 7477, 7478, 7479]
    },
    {
      id: 326,
      name: 'Swivel Tilt Control',
      fileName: '56-0131.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0131.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2270, 2271]
    },
    {
      id: 327,
      name: 'Synchro Tilt Control',
      fileName: '56-0132.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0132.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2272, 2273]
    },
    {
      id: 328,
      name: 'Synchro Tilt Control with Back Adjustment',
      fileName: '56-0133.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0133.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2274, 2275]
    },
    {
      id: 329,
      name: 'T-Base Assembly',
      fileName: '42-2351.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2351.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [4062, 4063]
    },
    {
      id: 330,
      name: 'T-Base Floor Leveling Glide',
      fileName: '143-0200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0200.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1714]
    },
    {
      id: 331,
      name: 'Table Assembly',
      fileName: '242-0060.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0060.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1075]
    },
    {
      id: 332,
      name: 'Table Assembly',
      fileName: '664-2000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-2000.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670]
    },
    {
      id: 333,
      name: 'Table Desk',
      fileName: '42-2360.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2360.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1361, 1362, 1363, 1364, 1366, 1367, 1368, 1369, 1370]
    },
    {
      id: 334,
      name: 'Table Lamp Installation',
      fileName: '664-0246.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0246.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2183]
    },
    {
      id: 335,
      name: 'Tablet Accessory Installation',
      fileName: '664-0241.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0241.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2238]
    },
    {
      id: 336,
      name: 'Tack Board Installation',
      fileName: '43-0610.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/43-0610.pdf',
      seriesIdArray: [33, 16, 56, 25, 68, 34, 57, 17, 32, 15, 70],
      serialNumberIdArray: [],
      basemodelIdArray: [1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 2309, 2310, 2450, 2452, 2454, 2456, 2457, 2459, 2460, 2462, 4170, 4221, 4222, 4223, 4224, 4225]
    },
    {
      id: 337,
      name: 'Teacher Station Installation',
      fileName: '143-0100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0100.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2626, 2627, 2628, 2629, 2630, 2631, 2632]
    },
    {
      id: 338,
      name: 'Teacher/Compact',
      fileName: '143-0099.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0099.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625]
    },
    {
      id: 339,
      name: 'Terrace 2.6 Packet',
      fileName: '343-1100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1100.pdf',
      seriesIdArray: [14],
      serialNumberIdArray: [],
      basemodelIdArray: [3, 4, 5, 6, 7, 8, 4100, 4101, 4102, 4103, 4104, 4105]
    },
    {
      id: 340,
      name: 'Terrace Packet',
      fileName: '343-2270G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2270G.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 499, 500, 858, 859, 860, 1650, 1651, 1652, 1653, 6564, 6565, 6566, 6567, 6568, 6569, 6570, 6571, 6572, 6573, 6574, 7850, 7852, 7854, 7856, 7862, 7864, 7866, 7908, 7909, 7910, 7911, 7912, 7913, 7918, 7919, 7920, 7921, 7922, 7927, 7928, 7929, 7930, 7931, 8547, 8548, 8549, 8550, 8551, 8552, 8553, 8554, 8555, 8556, 8557, 8558, 8559, 8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569, 8570, 8571, 8572, 8573, 8574, 8575, 8576, 8577, 8578, 8579, 8580, 8581, 8582, 8583, 8584, 8585, 8586, 8587, 8588, 8589, 8590, 8591, 8592, 8593, 8594, 8595, 8596, 8597, 8598, 8599, 8600, 8601, 8602, 8603, 8604, 8605, 8606, 8607, 8608, 8609, 8610, 8611, 8612, 8613, 8614, 8615, 8616, 8617, 8618, 8619, 8620, 8621, 8622, 8623, 8624, 8625, 8626, 8627, 8628, 8629, 8630, 8631, 8632, 8633, 8634, 8635, 8636, 8637, 8638, 8639, 8640, 8641, 8642, 8643, 8644, 8645, 8646, 8647, 8648, 8649, 8650, 8651, 8652, 8653, 8654, 8655, 8656, 8657, 8658, 8659, 8660, 8661, 8662, 8663, 8664, 8665, 8666, 8667, 8668, 8669, 8670, 8671, 8672, 8673, 8674, 8675, 8676, 8677, 8678, 8679, 8680, 8681, 8682, 8683, 8684, 8685, 8686, 8687, 8688, 8689, 8690, 8691, 8692, 8693, 8694, 8695, 8696, 8697, 8738, 8739, 8740, 8741, 8742, 8743, 8744, 8745, 8746, 8747, 8749, 8750, 8751, 8752, 8754, 8755, 8756, 8757, 8758, 8766, 8767, 8768, 8769, 8770, 8771, 8772, 8773, 8774, 8775, 8776, 8777, 8778, 8779, 8780, 8781, 8782, 8783, 8827, 8828, 8829, 8830, 8831, 8832, 8833, 8834, 8835, 8836, 8837, 8838, 8839, 8840, 8841, 8842, 8843, 8844, 8845, 8846, 8847, 8848, 8849, 8850, 8851, 8852, 8853, 8854, 8855, 8856, 8857, 8858, 8859, 8860, 8861, 8862, 8863, 8864, 8865, 8866, 8867, 8868, 8869, 8870, 8871, 8872, 8873, 8874, 8875, 8876, 8877, 8878, 8879, 8880, 8881, 8882, 8883, 8884, 8885, 8886, 8887, 8888, 8889, 8890, 8891, 8892, 8893, 8894, 8895, 8896, 8897, 8898, 8899, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 8912, 8913, 8914, 8915, 8916, 8917, 8918, 8919, 8920, 8921, 8922, 8923, 8924, 8925, 8926, 8927, 8928, 8929, 8930, 8931, 8932, 8933, 8934, 8935, 8936, 8937, 8938, 8939, 8940, 8941, 8942, 8943, 8944, 8945, 8946, 8947, 8948, 8949, 8950, 8951, 8952, 8953, 8954, 8955, 8956, 8957, 8958, 8959, 8960, 8961, 8962, 8963, 8964, 8965, 8966, 8967, 8968, 8969, 8970, 8971, 8972, 8973, 8974, 8975, 8976, 8977, 8978, 8979, 8980, 8981, 8982, 8983, 8984, 8985, 8986, 8987, 8988, 8989, 8990, 8991, 8992, 8993, 8994, 8995, 8996, 8997, 8998, 8999, 9000, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9026, 9027, 9028, 9029, 9030, 9031, 9032, 9033, 9034, 9035, 9036, 9037, 9038, 9039, 9040, 9041, 9042, 9043, 9044, 9045, 9046, 9047, 9048, 9049, 9050, 9051, 9052, 9053, 9054, 9055, 9056, 9057, 9058, 9059, 9060, 9061, 9062, 9063, 9064, 9065, 9066, 9067, 9068, 9069, 9070, 9071, 9072, 9073, 9074, 9075, 9076, 9077, 9078, 9079, 9080, 9081, 9082, 9083, 9084, 9085, 9086, 9087, 9088, 9089, 9090, 9091, 9092, 9093, 9094, 9095, 9096, 9097, 9098, 9099, 9100, 9101, 9102, 9103, 9104, 9105, 9106, 9107, 9108, 9109, 9110, 9111, 9112, 9113, 9114, 9115, 9116, 9117, 9118, 9119, 9120, 9121, 9122, 9123, 9124, 9125, 9126, 9127, 9128, 9129, 9130, 9131, 9132, 9133, 9134, 9135, 9136, 9137, 9138, 9139, 9140, 9141, 9142, 9143, 9144, 9145, 9146, 9147, 9148, 9149, 9150, 9151, 9152, 9153, 9154, 9155, 9156, 9157, 9158, 9159, 9160, 9161, 9162, 9163, 9164, 9165, 9166, 9167, 9168, 9169, 9170, 9171, 9172, 9173, 9174, 9175, 9176, 9177, 9178, 9179, 9180, 9181, 9182, 9183, 9184, 9185, 9186, 9187, 9188, 9189, 9190, 9191, 9192, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9204, 9205, 9206, 9207, 9208, 9209, 9210, 9211, 9212, 9213, 9214, 9215, 9216, 9217, 9218, 9219, 9220, 9221, 9222, 9223, 9224, 9225, 9226, 9227, 9228, 9229, 9230, 9231, 9232, 9233, 9234, 9235, 9236, 9237, 9238, 9239, 9240, 9241, 9242, 9243, 9244, 9245, 9246, 9247, 9248, 9249, 9250, 9251, 9252, 9253, 9254, 9255, 9256, 9257, 9258, 9259, 9260, 9261, 9262, 9263, 9264, 9265, 9266, 9267, 9268, 9269, 9270, 9271, 9272, 9273, 9274, 9275, 9276, 9277, 9278, 9279, 9280, 9281, 9282, 9283, 9284, 9285, 9286, 9287, 9288, 9289, 9290, 9291, 9292, 9293, 9294, 9295, 9296, 9297, 9298, 9299, 9300, 9301, 9302, 9303, 9304, 9305, 9306, 9307, 9308, 9309, 9310, 9311, 9312, 9313, 9314, 9315, 9316, 9317, 9318, 9319, 9320, 9321, 9322, 9323, 9324, 9325, 9326, 9327, 9328, 9329, 9330, 9331, 9332, 9333, 9334, 9335, 9336, 9337, 9338, 9339, 9340, 9341, 9342, 9343, 9344, 9345, 9346, 9347, 9348, 9349, 9350, 9351, 9352, 9353, 9354, 9355, 9356, 9357, 9358, 9359, 9360, 9361, 9362, 9363, 9364, 9365, 9366, 9369, 9370, 9371]
    },
    {
      id: 341,
      name: 'Three-Way Ganging Connector',
      fileName: '42-9503.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9503.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3298]
    },
    {
      id: 342,
      name: 'Tile Grommet Kit',
      fileName: '343-1101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1101.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [2267]
    },
    {
      id: 343,
      name: 'Two-Way Ganging Connector',
      fileName: '42-9502.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9502.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3297]
    },
    {
      id: 344,
      name: 'Upper Bookcase',
      fileName: '242-9666.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9666.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [4209, 4210, 4211, 4212, 4213, 4214]
    },
    {
      id: 345,
      name: 'Veneer Panel Base Installation',
      fileName: '664-0356.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0356.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4115, 4116, 4117, 4122, 4123, 4124, 4132, 4133]
    },
    {
      id: 346,
      name: 'Vertical Paper Management Unit',
      fileName: '242-7437.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7437.pdf',
      seriesIdArray: [68, 25, 17, 56, 16, 59],
      serialNumberIdArray: [],
      basemodelIdArray: [2633]
    },
    {
      id: 347,
      name: 'Video/Personal/Storage Cabinet',
      fileName: '242-9663.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9663.pdf',
      seriesIdArray: [32, 56, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [3183, 4162, 4163, 4203, 4204, 4205]
    },
    {
      id: 348,
      name: 'Wall Cabinet Installation',
      fileName: '242-7652.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7652.pdf',
      seriesIdArray: [16, 68, 38, 56],
      serialNumberIdArray: [],
      basemodelIdArray: [944, 945, 946, 947, 948, 949, 950, 951, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243]
    },
    {
      id: 349,
      name: 'Wall Cabinet Installation',
      fileName: '242-9667.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9667.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4171, 4172, 4173, 4174]
    },
    {
      id: 350,
      name: 'Wall Cabinet Installation',
      fileName: '242-9797.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9797.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [3267, 3268]
    },
    {
      id: 351,
      name: 'Wall Cabinet Installation',
      fileName: '664-0018.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0018.pdf',
      seriesIdArray: [56, 16, 59, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [1047, 1262, 1263, 3177, 4125]
    },
    {
      id: 352,
      name: 'Wall Connector',
      fileName: '143-0202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0202.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1711]
    },
    {
      id: 353,
      name: 'Wall Mount Open Shelf',
      fileName: '56-0470.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0470.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [941, 942]
    },
    {
      id: 354,
      name: 'Wall Rail System Installation',
      fileName: '143-1001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-1001.pdf',
      seriesIdArray: [41, 62],
      serialNumberIdArray: [],
      basemodelIdArray: [2635, 2636, 2637, 2638, 2639, 2640, 2641]
    },
    {
      id: 355,
      name: 'Wall Unit Installation',
      fileName: '242-7651.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7651.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2972, 2973, 2981, 2982, 3032, 3033, 3040, 3041]
    },
    {
      id: 356,
      name: 'Wardrobe/Storage Cabinet',
      fileName: '242-7293.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7293.pdf',
      seriesIdArray: [16, 68, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [899, 900, 901, 1080, 1081, 1175, 1176, 1177]
    },
    {
      id: 357,
      name: 'Warning Label',
      fileName: '42-5369.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Warning%20Labels/42-5369.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1390]
    },
    {
      id: 358,
      name: 'Warning Label',
      fileName: '56-0085.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/56-0085.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [4079, 4080, 4081, 4082, 4083, 4084, 4085, 4086, 4087, 4088, 4089, 4090, 4108, 4109, 4110, 4111, 4112, 4113]
    },
    {
      id: 359,
      name: 'Warning Label',
      fileName: '242-7490.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Warning%20Labels/242-7490.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [935]
    },
    {
      id: 360,
      name: 'Whiteboard Installation',
      fileName: '664-1206.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1206.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2706, 2707]
    },
    {
      id: 361,
      name: 'Wire Management Clip',
      fileName: '242-9831.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9831.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [4411, 4412]
    },
    {
      id: 362,
      name: 'Wire Management Installation',
      fileName: '242-9143.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9143.pdf',
      seriesIdArray: [34, 47],
      serialNumberIdArray: [],
      basemodelIdArray: [4907, 4908, 4909, 4910]
    },
    {
      id: 363,
      name: 'Worksurface Bracket',
      fileName: '42-0010.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-0010.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [4055]
    },
    {
      id: 364,
      name: 'Worksurface Leg Installation',
      fileName: '143-1600.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1600.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2678, 2680]
    },
    {
      id: 365,
      name: 'Worksurface Support/End Panel',
      fileName: '56-0640.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0640.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3074, 3075, 3076, 3077, 3078, 3079, 3082, 3083, 3084, 3085, 3088, 3089]
    },
    {
      id: 366,
      name: 'Worksurface Supported Pedestal',
      fileName: '42-2328.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2328.pdf',
      seriesIdArray: [67, 36, 39, 42],
      serialNumberIdArray: [],
      basemodelIdArray: [1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 3881, 3882, 3883, 3884, 3885, 3886, 3887, 3888, 3933, 3934, 3935, 3936, 3937, 3938, 3939, 3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949, 3950, 3951, 3952, 3953, 3954, 3955, 3956, 3957, 3958, 3959, 3960, 3961, 3962, 3963, 3964, 3965, 3966, 3967, 3968, 3969, 3970, 3971, 3972, 3973, 3974, 3975, 3976, 3977, 3978, 3979, 3980, 4136, 4137, 4138, 4139]
    },
    {
      id: 367,
      name: 'Worksurface Supports',
      fileName: '42-2248.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2248.pdf',
      seriesIdArray: [67, 27],
      serialNumberIdArray: [],
      basemodelIdArray: [1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1837, 1838, 4226, 4227, 4228, 4229, 4230, 4231, 4232, 4233, 4234, 4235, 4236, 4237, 4238, 4239, 4240, 4241, 4242, 4243, 4244, 4245, 4246, 4247, 4248, 4249, 4250, 4251, 4252, 4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260, 4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268, 4269, 4270, 4271, 4272, 4273, 4274, 4275, 4276, 4277, 4278, 4279, 4280, 4281, 4282, 4283, 4284, 4285, 4286, 4287, 4288, 4289, 4290, 4291, 4292, 4293, 4294, 4295, 4296, 4297, 4298, 4299, 4300, 4301, 4302, 4303, 4304, 4305, 4306, 4307, 4308, 4309, 4310, 4311, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333, 4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4343, 4344, 4345, 4363, 4364, 4365, 4366, 4367, 4368, 4369, 4370, 4371, 4372, 4373, 4374, 4375, 4376, 4377, 4378, 4379, 4380, 4381, 4382, 4383, 4384, 4385, 4386, 4387, 4388, 4389, 4390, 4391, 4392, 4393, 4394, 4395, 4396, 4397, 4398, 4399, 4400, 4401, 4402, 4403, 4404, 4405, 4406, 4407, 4408, 4409, 4410, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421, 4422, 4423, 4424, 4425, 4426, 4427, 4428, 4429, 4430, 4431, 4432, 4433, 4434, 4435, 4436, 4437, 4438, 4439, 4440, 4441, 4442, 4443, 4444, 4445, 4446, 4447, 4448, 4449, 4450, 4451, 4452, 4453, 4454, 4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465, 4466, 4467, 4468, 4469, 4470, 4471, 4472, 4473, 4474, 4475, 4476, 4477, 4478, 4479, 4480, 4481, 4482, 4483, 4484, 4485, 4486, 4487, 4488, 4489, 4490, 4491, 4492, 4493, 4494, 4495, 4496, 4497, 4498, 4499, 4500, 4501, 4502, 4503, 4504, 4505, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4518, 4519, 4520, 4521, 4522, 4523, 4524, 4525, 4526, 4527, 4528, 4529, 4530, 4531, 4532, 4533, 4534, 4535, 4536, 4537, 4538, 4539, 4540, 4541, 4542, 4543, 4544, 4545, 4546, 4547, 4548, 4549, 4550, 4551, 4552, 4553, 4554, 4555, 4556, 4557, 4558, 4559, 4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570, 4571, 4572, 4573, 4574, 4575, 4576, 4577, 4578, 4579, 4580, 4581, 4582, 4583, 4584, 4585, 4586, 4587, 4588, 4589, 4590, 4591, 4592, 4593, 4594, 4595, 4596, 4597, 4598, 4599, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4608, 4609, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619, 4620, 4621, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4655, 4656, 4657, 4658, 4659, 4660, 4661, 4662, 4663, 4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685, 4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 4695, 4696, 4697, 4698, 4699, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729, 4730, 4731, 4732, 4733, 4734, 4735, 4736, 4737, 4738, 4739, 4740, 4741, 4742, 4743, 4744, 4745, 4746, 4747, 4748, 4749, 4750, 4751, 4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828, 4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905, 4906, 4911, 4912, 4913, 4914, 4915, 4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4947, 4948, 4949, 4950, 4951, 4952, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960, 4961, 4962, 4963, 4964, 4965, 4966, 4967, 4968, 4969, 4970, 4971, 4972, 4973, 4974, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987, 4988, 4989, 4990, 4991, 4992, 4993, 4994, 4995, 4996, 4997, 4998, 4999, 5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020, 5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030, 5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043, 5044, 5045, 5046, 5047, 5048, 5049, 5050, 5051, 5052, 5053, 5054, 5055, 5056, 5057, 5058, 5059, 5060, 5061, 5062, 5063, 5064, 5065, 5066, 5067, 5068, 5069, 5070, 5071, 5072, 5073, 5074, 5075, 5076, 5077, 5078, 5079, 5080, 5081, 5082, 5083, 5084, 5085, 5086, 5087, 5088, 5089, 5090, 5091, 5092, 5093, 5094, 5095, 5096, 5097, 5098, 5099, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5112, 5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123, 5124, 5125, 5126, 5127, 5128, 5129, 5130, 5131, 5132, 5133, 5134, 5135, 5136, 5137, 5138, 5139, 5140, 5141, 5142, 5143, 5144, 5145, 5146, 5147, 5148, 5149, 5150]
    },
    {
      id: 368,
      name: 'Workwall with File Center',
      fileName: '143-1140.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1140.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2683]
    },
    {
      id: 369,
      name: 'X-Base Assembly',
      fileName: '664-0057.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0057.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [5151, 5152]
    },
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
