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
      serialNumberIdArray: [1],
      basemodelIdArray: [1624]
    },
    {
      id: 3,
      name: '2-High Bookcase ',
      fileName: '242-9681.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9681.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [2],
      basemodelIdArray: [2285]
    },
    {
      id: 4,
      name: '24" Deep Modular Credenza',
      fileName: '242-7522.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7522.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [2],
      basemodelIdArray: [1142, 1140, 1144]
    },
    {
      id: 5,
      name: '3" Grommet Installation',
      fileName: '242-9559.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9559.pdf',
      seriesIdArray: [29, 38],
      serialNumberIdArray: [2],
      basemodelIdArray: [2202, 2201]
    },
    {
      id: 6,
      name: '3-Leg Height Adjustable Base',
      fileName: '143-1167.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Height%20Adjustable%20Tables/143-1167.pdf',
      seriesIdArray: [40],
      serialNumberIdArray: [3],
      basemodelIdArray: [2232]
    },
    {
      id: 7,
      name: '30" and 36" Stadium ',
      fileName: '143-1110.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1110.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [3],
      basemodelIdArray: [2655, 2658]
    },
    {
      id: 8,
      name: '30" Deep Modular Desk',
      fileName: '242-7520.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7520.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [3],
      basemodelIdArray: [1147, 1148]
    },
    {
      id: 9,
      name: '30" Open File Center ',
      fileName: '143-0501.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-0501.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [3],
      basemodelIdArray: [2654]
    },
    {
      id: 10,
      name: '36" and 60" Overhead ',
      fileName: '143-1100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1100.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2657, 2660]
    },
    {
      id: 11,
      name: '36" Deep Modular Desk',
      fileName: '242-7521.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7521.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1149]
    },
    {
      id: 12,
      name: '4-Trac Wire Harness ',
      fileName: '664-0131.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0131.pdf',
      seriesIdArray: [47, 71, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [2640, 2637, 2634, 2632, 2635, 2641, 2638, 2630, 2633, 2636, 2639]
    },
    {
      id: 13,
      name: '4-Track Wire Wall Plate',
      fileName: '664-0132.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0132.pdf',
      seriesIdArray: [60, 47],
      serialNumberIdArray: [],
      basemodelIdArray: [2624, 2631]
    },
    {
      id: 14,
      name: '4-Wire Electrical System',
      fileName: '242-9830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9830.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2628, 2623, 2629]
    },
    {
      id: 15,
      name: '48" Bridge ',
      fileName: '242-7071.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7071.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1670]
    },
    {
      id: 16,
      name: '5-High Bookcase ',
      fileName: '242-9682.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9682.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [],
      basemodelIdArray: [2286]
    },
    {
      id: 17,
      name: '72" Peninsula ',
      fileName: '242-7048.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7048.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1665]
    },
    {
      id: 18,
      name: 'Abode Packet',
      fileName: '56-0421.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0421.pdf',
      seriesIdArray: [26],
      serialNumberIdArray: [],
      basemodelIdArray: [3846, 3829, 3852, 3826, 3849, 3815, 3832, 3855, 3838, 3835, 3818, 3824, 3847, 3821, 3844, 3841, 3830, 3853, 3827, 3850, 3833, 3839, 3816, 3842, 3819, 3836, 3856, 3845, 3822, 3828, 3825, 3848, 3831, 3854, 3814, 3851, 3834, 3823, 3840, 3837, 3820, 3843, 3817]
    },
    {
      id: 19,
      name: 'Abound Packet',
      fileName: '343-2270G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2270G.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3358, 3312, 3504, 3481, 3773, 3418, 3664, 3441, 3498, 3372, 3395, 3435, 3730, 3461, 3355, 3790, 3315, 3378, 3770, 3352, 3398, 3767, 3524, 3587, 3455, 3415, 3478, 3527, 3421, 3467, 3590, 3490, 3387, 3693, 3716, 3318, 3779, 3616, 3364, 3341, 3427, 3653, 3530, 3324, 3401, 3507, 3782, 3613, 3736, 3344, 3424, 3447, 3510, 3407, 3713, 3321, 3384, 3776, 3304, 3327, 3350, 3373, 3496, 3642, 3473, 3602, 3433, 3582, 3513, 3310, 3559, 3702, 3748, 3788, 3725, 3576, 3745, 3393, 3347, 3307, 3453, 3476, 3370, 3682, 3705, 3353, 3533, 3396, 3419, 3465, 3359, 3319, 3402, 3356, 3671, 3459, 3379, 3608, 3505, 3694, 3316, 3791, 3416, 3731, 3708, 3422, 3754, 3691, 3339, 3751, 3502, 3479, 3628, 3399, 3376, 3313, 3439, 3525, 3757, 3511, 3365, 3342, 3534, 3488, 3680, 3574, 3425, 3348, 3740, 3763, 3528, 3514, 3451, 3388, 3325, 3385, 3508, 3660, 3445, 3491, 3362, 3531, 3471, 3697, 3720, 3322, 3760, 3345, 3305, 3431, 3749, 3603, 3457, 3726, 3626, 3351, 3543, 3397, 3311, 3766, 3786, 3480, 3640, 3686, 3394, 3789, 3371, 3772, 3500, 3308, 3354, 3600, 3577, 3769, 3477, 3683, 3746, 3437, 3417, 3494, 3314, 3643, 3320, 3426, 3526, 3589, 3758, 3735, 3672, 3755, 3778, 3340, 3506, 3363, 3420, 3443, 3357, 3403, 3529, 3317, 3380, 3423, 3400, 3546, 3569, 3669, 3377, 3523, 3629, 3715, 3463, 3383, 3675, 3775, 3752, 3549, 3509, 3787, 3781, 3512, 3704, 3449, 3343, 3366, 3552, 3326, 3475, 3489, 3309, 3349, 3741, 3764, 3469, 3515, 3615, 3492, 3661, 3784, 3346, 3761, 3369, 3386, 3429, 3323, 3621, 3406, 3306, 3555, 3532, 3658, 3635, 3595, 3392, 3721]
    },
    {
      id: 20,
      name: 'Above Privacy Screen',
      fileName: '242-9820.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9820.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2312, 2315, 2310, 2313, 2311, 2314]
    },
    {
      id: 21,
      name: 'Above/Below Privacy Screen',
      fileName: '242-9818.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9818.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2410, 2407, 2405, 2408, 2409, 2406]
    },
    {
      id: 22,
      name: 'Accelerate Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1953, 7910, 1976, 1876, 2122, 1999, 2099, 1916, 1853, 3287, 1959, 1936, 1913, 7927, 2062, 2079, 2125, 2039, 1890, 2102, 7904, 2042, 2142, 1850, 3284, 7930, 1979, 1833, 2119, 1896, 1870, 1893, 2105, 2036, 7907, 1956, 1933, 1973, 2082, 3290, 2059, 2145, 7933, 2068, 1922, 2091, 1899, 3296, 1939, 2131, 2108, 2045, 1836, 1859, 1882, 1905, 2085, 7919, 1962, 1985, 2048, 2071, 1945, 1919, 3293, 1942, 2111, 2134, 1842, 2148, 2025, 7913, 2065, 3299, 2088, 1982, 2128, 2154, 1856, 1839, 1862, 1925, 1879, 1965, 7916, 1988, 1902, 7925, 2114, 1968, 2160, 1891, 1931, 1908, 1954, 1885, 2077, 1868, 2037, 1845, 2100, 1928, 3302, 2054, 2140, 2031, 2117, 2157, 2094, 3285, 1888, 1911, 1865, 2034, 7905, 7922, 1971, 2057, 4115, 1951, 2097, 2074, 2051, 1974, 2120, 1848, 1948, 1871, 2137, 2060, 2083, 1854, 1983, 1837, 3288, 1877, 2123, 2040, 1897, 1977, 7911, 1960, 1914, 7928, 2086, 2063, 3294, 1937, 2149, 1851, 2000, 1980, 1857, 1934, 1834, 1957, 2080, 7914, 2126, 2103, 1920, 2143, 7931, 7908, 2066, 1917, 1940, 3291, 2146, 1831, 1894, 2106, 2043, 7917, 2152, 1946, 2046, 1860, 2052, 2115, 2069, 1923, 2092, 1900, 2032, 2109, 2132, 1883, 1906, 1866, 1969, 7920, 1843, 2026, 2049, 1926, 1880, 2072, 3300, 1903, 2095, 1943, 2112, 2135, 1963, 2155, 1986, 1863, 1840, 1886, 1989, 1966, 2089, 3297, 2129, 1949, 3289, 1915, 1869, 2038, 7903, 2138, 1846, 7909, 7926, 3303, 1975, 2061, 1892, 1998, 1978, 2078, 2158, 1889, 2101, 1952, 1852, 1929, 3286, 2055, 2141, 7906, 7929, 2118, 1972, 1872, 1912, 1935, 1849, 1955, 1932, 1909, 1832, 7923, 2081, 2058, 2144, 2121, 2098, 2075, 2035, 1838, 1984, 1961, 2130, 2107, 1938, 2084, 7912, 2124, 2024, 3295, 1944, 2150, 1858, 1835, 1875, 1921, 2110, 2047, 1898, 1895, 2087, 2064, 1964, 1881, 1958, 2127, 3292, 2104, 2041, 2147, 3813, 1878, 2044, 1901, 7932, 2027, 1981, 2067, 7915, 1918, 1941, 1855, 1884, 1907, 1930, 2076, 2053, 2030, 1861, 1967, 7918, 1990, 2159, 2139, 1947, 2116, 1867, 1970, 2070, 1844, 2093, 2242, 3301, 2133, 7921, 1987, 2156, 2056, 1950, 2073, 1864, 1927, 2033, 1841, 1904, 2096, 3298, 1924, 2136, 2050, 1887, 1910, 2113, 7924, 2153, 2090, 1847]
    },
    {
      id: 23,
      name: 'Access Strip',
      fileName: '242-7221.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7221.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [891]
    },
    {
      id: 24,
      name: 'Accessory Packet',
      fileName: '143-0101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0101.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2302, 2299, 2308, 2305, 2294, 2297, 2303, 2300, 2306, 2292, 2295, 2301, 2298, 2304, 2307]
    },
    {
      id: 25,
      name: 'Activity Table ',
      fileName: '664-0075.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0075.pdf',
      seriesIdArray: [30],
      serialNumberIdArray: [],
      basemodelIdArray: [2029, 2028]
    },
    {
      id: 26,
      name: 'Adept Packet',
      fileName: '343-1861.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1861.pdf',
      seriesIdArray: [1],
      serialNumberIdArray: [],
      basemodelIdArray: [8679, 790, 501, 232, 504, 235, 507, 281, 782, 779, 8525, 284, 8680, 505, 236, 791, 233, 256, 502, 8526, 282, 780, 242, 783, 279, 285, 506, 234, 280, 503, 8681, 237, 778, 8527, 781, 283, 243, 784]
    },
    {
      id: 27,
      name: 'Adjustable Shelf',
      fileName: '242-8727.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8727.pdf',
      seriesIdArray: [57, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [3231, 2872]
    },
    {
      id: 28,
      name: 'Align Packet',
      fileName: '343-1555.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1555.pdf',
      seriesIdArray: [2],
      serialNumberIdArray: [],
      basemodelIdArray: [9706, 9646, 9692, 9686, 9709, 9689, 9712, 9675, 9698, 9721, 7886, 9715, 9718, 9695, 7883, 9678, 7895, 9724, 862, 9644, 9684, 9707, 9687, 9701, 9681, 9704, 9727, 9713, 9690, 9716, 9693, 9710, 9647, 7884, 9722, 9682, 9676, 9699, 9679, 9702, 9719, 9696, 9645, 9705, 9685, 9708, 9642, 9725, 9728, 9688, 9691, 9714, 9697, 9677, 9694, 9717, 7885, 9711, 9683, 7934, 7894, 9643, 9700, 9723, 7888, 9726, 861, 9720, 9703, 9680]
    },
    {
      id: 29,
      name: 'Approach Packet',
      fileName: '3430394200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430394200.pdf',
      seriesIdArray: [3],
      serialNumberIdArray: [],
      basemodelIdArray: [9570, 9447, 9464, 9510, 9593, 9487, 9507, 9484, 9633, 9610, 9587, 9547, 9524, 9467, 9444, 9567, 9590, 9490, 9613, 9530, 9573, 9550, 9504, 9527, 9441, 9630, 9456, 9533, 9639, 9616, 9596, 9476, 9619, 9470, 9493, 9516, 9539, 9556, 9453, 9579, 9636, 9513, 9559, 9553, 9496, 9450, 9576, 9599, 9536, 9473, 9622, 9502, 9525, 9625, 9562, 9585, 9608, 9479, 9565, 9588, 9462, 9602, 9605, 9482, 9505, 9582, 9499, 9545, 9459, 9522, 9628, 9542, 9519, 9442, 9568, 9448, 9471, 9548, 9594, 9617, 9534, 9634, 9611, 9554, 9531, 9445, 9508, 9485, 9571, 9574, 9491, 9468, 9451, 9465, 9511, 9488, 9631, 9591, 9614, 9637, 9551, 9528, 9494, 9517, 9640, 9540, 9577, 9500, 9557, 9603, 9454, 9580, 9477, 9474, 9537, 9514, 9597, 9620, 9600, 9623, 9520, 9560, 9497, 9457, 9583, 9586, 9609, 9563, 9486, 9503, 9549, 9463, 9440, 9632, 9569, 9526, 9546, 9523, 9626, 9529, 9460, 9629, 9589, 9566, 9443, 9612, 9506, 9483, 9480, 9543, 9466, 9606, 9578, 9509, 9472, 9495, 9469, 9446, 9515, 9492, 9572, 9595, 9555, 9532, 9618, 9598, 9552, 9452, 9635, 9592, 9615, 9638, 9535, 9489, 9512, 9449, 9575, 9601, 9478, 9518, 9541, 9455, 9624, 9538, 9627, 9564, 9641, 9501, 9461, 9544, 9498, 9521, 9621, 9558, 9604, 9581, 9475, 9561, 9607, 9458, 9584, 9481]
    },
    {
      id: 30,
      name: 'Arm Assembly',
      fileName: '42-5577.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5577.pdf',
      seriesIdArray: [24],
      serialNumberIdArray: [],
      basemodelIdArray: [1475]
    },
    {
      id: 31,
      name: 'Back Enclosure',
      fileName: '242-7417.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7417.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1094, 1092, 1095, 1093, 1096]
    },
    {
      id: 32,
      name: 'Back Installation',
      fileName: '56-0459.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0459.pdf',
      seriesIdArray: [66],
      serialNumberIdArray: [],
      basemodelIdArray: [2240, 2237, 2238, 2235, 2239, 2236]
    },
    {
      id: 33,
      name: 'Base Assembly',
      fileName: '664-0057.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0057.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [5133, 5132]
    },
    {
      id: 34,
      name: 'Base Assembly',
      fileName: '664-0058.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0058.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [1657]
    },
    {
      id: 35,
      name: 'Base Assembly',
      fileName: '664-0059.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0059.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [1660, 1658, 1659]
    },
    {
      id: 36,
      name: 'Base Assembly',
      fileName: '664-0060.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0060.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [1655, 1656, 1654]
    },
    {
      id: 37,
      name: 'Base Cabinet Installation',
      fileName: '242-9807.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9807.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [3179, 3242, 3177, 3240, 3180, 3178, 3241, 3239]
    },
    {
      id: 38,
      name: 'Base to Table ',
      fileName: '664-0240.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0240.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2207, 2199, 2196, 2208, 2222, 2205, 2197, 2220, 2206, 2195, 2198, 2221, 2204]
    },
    {
      id: 39,
      name: 'Book Box Installation',
      fileName: '664-0204.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/664-0204.pdf',
      seriesIdArray: [63, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [1817, 2273, 1818]
    },
    {
      id: 40,
      name: 'Bookcase  Assembly',
      fileName: '56-0408.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0408.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2399, 2422, 2423, 2398]
    },
    {
      id: 41,
      name: 'Bookcase  Assembly',
      fileName: '242-6661.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6661.pdf',
      seriesIdArray: [20],
      serialNumberIdArray: [],
      basemodelIdArray: [1289, 1292, 1290, 1293, 1291, 1294]
    },
    {
      id: 42,
      name: 'Bookcase Assembly',
      fileName: '242-2515.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-2515.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1617, 1614, 1612, 1613, 1616]
    },
    {
      id: 43,
      name: 'Bookcase Assembly',
      fileName: '242-6941.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6941.pdf',
      seriesIdArray: [19],
      serialNumberIdArray: [],
      basemodelIdArray: [1283, 1286, 1284, 1287, 1285, 1288]
    },
    {
      id: 44,
      name: 'Bookcase Assembly',
      fileName: '242-9175.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9175.pdf',
      seriesIdArray: [16, 71, 17, 69, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [1110, 984, 1107, 2879, 2816, 2819, 2318, 1216, 987, 2817, 2316, 1214, 985, 1108, 2880, 2820, 2317, 2818, 986, 1109, 1215]
    },
    {
      id: 45,
      name: 'Bookcase Assembly',
      fileName: '242-9664.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9664.pdf',
      seriesIdArray: [32, 33, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [4134, 4180, 4137, 4135, 4181, 3159, 4138, 3160, 4179]
    },
    {
      id: 46,
      name: 'Bookcase Hutch',
      fileName: '242-9665.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9665.pdf',
      seriesIdArray: [33, 57, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [4141, 3162, 4139, 3163, 4182, 4140, 3161, 4183]
    },
    {
      id: 47,
      name: 'Bookcase Pedestal ',
      fileName: '242-9803.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9803.pdf',
      seriesIdArray: [71, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [2402, 2814, 2425, 2815, 2813]
    },
    {
      id: 48,
      name: 'Bridge Assembly',
      fileName: '56-0637.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0637.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2897, 2894]
    },
    {
      id: 49,
      name: 'Bridge Assembly',
      fileName: '242-0001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0001.pdf',
      seriesIdArray: [17, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1230, 1111, 1231, 1105, 1217, 1097, 1106, 1232, 1218, 1098, 1115]
    },
    {
      id: 50,
      name: 'Bridge Assembly',
      fileName: '242-0025.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0025.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1631]
    },
    {
      id: 51,
      name: 'Bridge Assembly',
      fileName: '242-0047.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0047.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1630]
    },
    {
      id: 52,
      name: 'Bridge Assembly',
      fileName: '242-0175.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0175.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4128, 4131, 4132, 4129, 4133, 4130]
    },
    {
      id: 53,
      name: 'Bridge Assembly',
      fileName: '242-7130.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7130.pdf',
      seriesIdArray: [16, 15],
      serialNumberIdArray: [],
      basemodelIdArray: [989, 1015, 2289, 990, 1016, 988, 1017]
    },
    {
      id: 54,
      name: 'Bridge Assembly',
      fileName: '242-7475.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7475.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [3211, 3209, 3212, 3210]
    },
    {
      id: 55,
      name: 'Bridge Assembly',
      fileName: '242-8885.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8885.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1711]
    },
    {
      id: 56,
      name: 'Bridge Assembly',
      fileName: '242-9661.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9661.pdf',
      seriesIdArray: [57, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [4170, 3157, 4173, 3155, 3156, 4172]
    },
    {
      id: 57,
      name: 'Bridge/Return ',
      fileName: '242-9815.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9815.pdf',
      seriesIdArray: [38, 16, 71],
      serialNumberIdArray: [],
      basemodelIdArray: [3126, 2459, 2565, 2482, 2588, 2479, 2582, 3123, 2585, 3129, 2462, 1048, 1054, 2465, 3132, 2471, 2448, 3115, 2574, 2485, 1051, 2568, 2445, 2571, 3135, 2468, 3141, 3118, 2580, 2474, 2583, 3124, 2457, 3138, 2577, 1057, 2477, 3121, 2466, 2480, 2566, 3130, 2569, 2463, 2483, 2586, 3127, 1049, 2460, 3133, 2572, 1055, 2575, 1052, 2449, 3116, 3139, 2472, 2469, 2446, 1058, 3136, 2578, 3119, 2481, 2581, 3125, 2458, 3122, 2584, 2478, 2475, 2461, 3142, 3134, 2573, 2567, 3131, 1053, 2464, 2447, 1050, 2587, 3128, 2467, 2444, 2484, 2570, 2473, 3117, 3140, 1059, 2456, 3137, 2576, 2470, 2579, 1056, 3120, 2476]
    },
    {
      id: 58,
      name: 'Cabinet Top',
      fileName: '242-9670.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9670.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [4189, 4175, 4176, 4165, 4171, 4174, 4166]
    },
    {
      id: 59,
      name: 'Cabinet Whiteboard Bracket',
      fileName: '143-0107.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0107.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2296]
    },
    {
      id: 60,
      name: 'Cableway to Raceway Retrofit Kit',
      fileName: '42-2249.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2249.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [3244, 3243]
    },
    {
      id: 61,
      name: 'Cam Lock ',
      fileName: '42-2619.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2619.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2161, 2162, 2163]
    },
    {
      id: 62,
      name: 'Cart Assembly',
      fileName: '42-5372.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5372.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1391]
    },
    {
      id: 63,
      name: 'Caster Installation',
      fileName: '42-2337.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2337.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [874]
    },
    {
      id: 64,
      name: 'Center Drawer ',
      fileName: '42-2552.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2552.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1829, 1827, 1828]
    },
    {
      id: 65,
      name: 'Center Drawer ',
      fileName: '242-0019.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0019.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1276, 1277]
    },
    {
      id: 66,
      name: 'Chair Assembly',
      fileName: '42-5390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5390.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2253, 2257]
    },
    {
      id: 67,
      name: 'Chair Assembly',
      fileName: '42-5453.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5453.pdf',
      seriesIdArray: [37],
      serialNumberIdArray: [],
      basemodelIdArray: [1409, 1410]
    },
    {
      id: 68,
      name: 'Chair Assembly',
      fileName: '42-5585.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5585.pdf',
      seriesIdArray: [37, 64],
      serialNumberIdArray: [],
      basemodelIdArray: [1408, 1385, 1383, 1386, 1384, 1407]
    },
    {
      id: 69,
      name: 'Chair Assembly',
      fileName: '46-1004.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1004.pdf',
      seriesIdArray: [31],
      serialNumberIdArray: [],
      basemodelIdArray: [1314]
    },
    {
      id: 70,
      name: 'Chair Cart ',
      fileName: '42-9967.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9967.pdf',
      seriesIdArray: [44],
      serialNumberIdArray: [],
      basemodelIdArray: [2194]
    },
    {
      id: 71,
      name: 'Chair Cart ',
      fileName: '46-1008.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1008.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [4116]
    },
    {
      id: 72,
      name: 'Chair Ganging and Magazine Holder',
      fileName: '42-9830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9830.pdf',
      seriesIdArray: [56],
      serialNumberIdArray: [],
      basemodelIdArray: [1395]
    },
    {
      id: 73,
      name: 'Chair-to-Chair Ganging',
      fileName: '56-0442.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0442.pdf',
      seriesIdArray: [66],
      serialNumberIdArray: [],
      basemodelIdArray: [2234]
    },
    {
      id: 74,
      name: 'Chair-to-Table Ganging',
      fileName: '56-0441.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0441.pdf',
      seriesIdArray: [66],
      serialNumberIdArray: [],
      basemodelIdArray: [2233]
    },
    {
      id: 75,
      name: 'Cockpit Corner Unit ',
      fileName: '242-7125.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7125.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1239, 1028, 1238, 1029]
    },
    {
      id: 76,
      name: 'Collaborative Shelf',
      fileName: '56-0644.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0644.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3050]
    },
    {
      id: 77,
      name: 'Concencys Packet',
      fileName: '70-0010.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/70-0010.pdf',
      seriesIdArray: [4],
      serialNumberIdArray: [],
      basemodelIdArray: [30, 53, 13, 797, 803, 820, 176, 153, 843, 173, 27, 50, 840, 179, 33, 10, 159, 823, 846, 156, 800, 829, 806, 852, 62, 162, 36, 789, 185, 59, 145, 165, 142, 19, 42, 826, 849, 809, 786, 182, 56, 7825, 832, 39, 16, 154, 45, 22, 798, 7828, 168, 28, 835, 65, 818, 795, 174, 841, 151, 48, 171, 25, 148, 838, 855, 815, 792, 821, 31, 177, 844, 54, 183, 14, 37, 804, 827, 160, 51, 180, 11, 34, 801, 57, 807, 824, 847, 157, 23, 169, 146, 853, 830, 813, 186, 850, 60, 20, 43, 7826, 856, 810, 787, 166, 143, 833, 163, 17, 793, 40, 63, 149, 46, 799, 836, 822, 155, 29, 175, 842, 152, 52, 819, 796, 802, 26, 49, 816, 172, 32, 839, 161, 184, 38, 15, 805, 178, 845, 144, 828, 851, 35, 12, 788, 825, 58, 848, 158, 18, 808, 785, 164, 181, 55, 814, 170, 61, 147, 837, 167, 21, 44, 834, 811, 150, 7827, 187, 857, 794, 817, 41, 854, 831, 64, 7824, 47, 24]
    },
    {
      id: 78,
      name: 'Contemporary Base Installation',
      fileName: '664-0354.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0354.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4088, 4087]
    },
    {
      id: 79,
      name: 'Corner Bookcase ',
      fileName: '242-9811.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9811.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2350]
    },
    {
      id: 80,
      name: 'Corner Shield',
      fileName: '242-9125.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9125.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1628, 1634, 1617, 1614, 1626, 1635, 1612, 1629, 1632, 1615, 1627, 1613, 1636, 1616, 1625]
    },
    {
      id: 81,
      name: 'Corner Sleeve',
      fileName: '42-2445.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2445.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1398]
    },
    {
      id: 82,
      name: 'Corner Unit ',
      fileName: '42-2361.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2361.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1365]
    },
    {
      id: 83,
      name: 'Corner Unit ',
      fileName: '242-0082.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0082.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1139]
    },
    {
      id: 84,
      name: 'Corner Unit ',
      fileName: '242-8000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8000.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [870]
    },
    {
      id: 85,
      name: 'Counterweight Kit',
      fileName: '42-2730.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/42-2730.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3807, 3808, 3809]
    },
    {
      id: 86,
      name: 'CPU Cabinet ',
      fileName: '242-7668.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7668.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [869, 1157]
    },
    {
      id: 87,
      name: 'Credenza Assembly',
      fileName: '242-7390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7390.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1208, 1209]
    },
    {
      id: 88,
      name: 'Credenza Installation',
      fileName: '664-0196.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0196.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4100, 4072, 4073, 4099]
    },
    {
      id: 89,
      name: 'Credenza Power Pack',
      fileName: '242-9832.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9832.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2355, 2625, 2354, 2626]
    },
    {
      id: 90,
      name: 'Credenza Shell ',
      fileName: '56-0477.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0477.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [959, 965, 963, 961]
    },
    {
      id: 91,
      name: 'Credenza Shell (Short Modesty)',
      fileName: '56-0478.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0478.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [960, 966, 964, 962]
    },
    {
      id: 92,
      name: 'Cube Base Installation',
      fileName: '664-0360.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0360.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4080, 4112]
    },
    {
      id: 93,
      name: 'Cylinder Base Installation',
      fileName: '664-0362.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0362.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4109, 4107, 4079, 4108]
    },
    {
      id: 94,
      name: 'Desk and Return',
      fileName: '42-2300.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2300.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1333, 1353, 1342, 1356, 1339, 1359, 1336, 1357, 1334, 1354, 1331, 1337, 1340, 1360, 1343, 1332, 1355, 1338, 1358, 1335, 1341, 1344]
    },
    {
      id: 95,
      name: 'Desk and Return',
      fileName: '42-2538.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2538.pdf',
      seriesIdArray: [29, 21, 50, 51],
      serialNumberIdArray: [],
      basemodelIdArray: [3149, 1649, 3146, 1317, 1646, 1320, 1509, 3152, 1512, 1644, 1518, 1641, 1647, 1321, 1507, 3147, 1816, 1318, 3153, 1315, 3150, 1513, 1642, 1510, 3148, 1519, 1648, 1645, 1316, 1322, 1319, 3154, 1508, 1511, 3151, 1643, 1640]
    },
    {
      id: 96,
      name: 'Door Assembly',
      fileName: '242-3342.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-3342.pdf',
      seriesIdArray: [18],
      serialNumberIdArray: [],
      basemodelIdArray: [1281, 1282]
    },
    {
      id: 97,
      name: 'Door Cabinet ',
      fileName: '242-7128.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7128.pdf',
      seriesIdArray: [17, 69, 32, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [973, 1076, 4142, 896, 1077, 974, 895, 1210]
    },
    {
      id: 98,
      name: 'Door Hinge Adjustment',
      fileName: '242-0021.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0021.pdf',
      seriesIdArray: [25, 71],
      serialNumberIdArray: [],
      basemodelIdArray: [2331, 2526, 2340, 2529, 2320, 2326, 2535, 2532, 2335, 2538, 2524, 2324, 2379, 2522, 2388, 1618, 2322]
    },
    {
      id: 99,
      name: 'Door Unit ',
      fileName: '242-7224.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7224.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1156, 868]
    },
    {
      id: 100,
      name: 'Double High Stack-On Unit',
      fileName: '56-0636.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0636.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2986, 3032, 3038, 3035, 2972, 2975, 3004, 3041, 3044, 3030, 3033, 2987, 3039, 2976, 2973, 3042, 3036, 3045, 3002, 2988, 3031, 2971, 3034, 3037, 3040, 2977, 3003, 3043]
    },
    {
      id: 101,
      name: 'Drawer Handle Installation',
      fileName: '242-9087.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9087.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1751, 1752]
    },
    {
      id: 102,
      name: 'Drawer Organizer',
      fileName: '242-9814.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9814.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2450]
    },
    {
      id: 103,
      name: 'Electrical System',
      fileName: '42-2241.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2241.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [2226, 2227, 2225]
    },
    {
      id: 104,
      name: 'Electrical System',
      fileName: '343-0477.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0477.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [2230, 2228, 2231, 2229]
    },
    {
      id: 105,
      name: 'End Book Shelf ',
      fileName: '242-7126.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7126.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [977]
    },
    {
      id: 106,
      name: 'End Book Shelf ',
      fileName: '242-7202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7202.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1146]
    },
    {
      id: 107,
      name: 'End Book Shelf ',
      fileName: '242-7669.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7669.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1213, 979]
    },
    {
      id: 108,
      name: 'End Book Shelf ',
      fileName: '242-9564.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9564.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [981, 980]
    },
    {
      id: 109,
      name: 'End Book Shelf ',
      fileName: '242-9565.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9565.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [982, 983]
    },
    {
      id: 110,
      name: 'End Cap Bookshelf ',
      fileName: '242-7292.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7292.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1212, 978]
    },
    {
      id: 111,
      name: 'Essentials/Persona Packet',
      fileName: '343-0100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0100.pdf',
      seriesIdArray: [5],
      serialNumberIdArray: [],
      basemodelIdArray: [7834, 7840, 7823, 498, 7849, 7832, 7846, 7838, 7841, 1, 7844, 7850, 7830, 7842, 7839, 7836, 188, 2, 7848, 497]
    },
    {
      id: 112,
      name: 'Extended Corner Unit ',
      fileName: '242-7297.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7297.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1031, 1240, 1241, 1030]
    },
    {
      id: 113,
      name: 'Extended Corner Unit ',
      fileName: '242-9139.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9139.pdf',
      seriesIdArray: [57, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [3265, 3263, 3054, 3051, 3052, 3264, 3053, 3262]
    },
    {
      id: 114,
      name: 'External Stiffener',
      fileName: '242-9819.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/242-9819.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2517, 2520, 2518, 2519]
    },
    {
      id: 115,
      name: 'Field Installable Drawer Pull',
      fileName: '242-7191.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7191.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1819, 1822, 4038, 4041, 1823, 1820, 4039, 4042, 1821, 1824, 4037, 4040]
    },
    {
      id: 116,
      name: 'Field Installable Drawer Pull',
      fileName: '242-9563.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9563.pdf',
      seriesIdArray: [17, 60, 69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [2281, 2284, 2282, 2283]
    },
    {
      id: 117,
      name: 'Field Installable Grommet',
      fileName: '242-7120.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7120.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [2200]
    },
    {
      id: 118,
      name: 'Field Installable Top',
      fileName: '56-0337.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0337.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3861, 3859, 3860]
    },
    {
      id: 119,
      name: 'Fixed and Adjustable Leg',
      fileName: '664-1200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1200.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2757, 2780, 2717, 2740, 2677, 2777, 2760, 2714, 2800, 2737, 2797, 2720, 2703, 2749, 2683, 2723, 2700, 2786, 2769, 2789, 2806, 2766, 2743, 2772, 2709, 2732, 2729, 2752, 2712, 2735, 2681, 2804, 2764, 2675, 2784, 2698, 2750, 2787, 2710, 2793, 2810, 2770, 2747, 2707, 2730, 2767, 2727, 2756, 2796, 2733, 2779, 2716, 2799, 2776, 2759, 2719, 2742, 2725, 2702, 2802, 2762, 2739, 2722, 2808, 2745, 2705, 2679, 2782, 2754, 2794, 2791, 2774]
    },
    {
      id: 120,
      name: 'Fixed Arm Installation',
      fileName: '46-1050.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1050.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2249, 2250]
    },
    {
      id: 121,
      name: 'Flipper Doors',
      fileName: '343-0141.PDF',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-0141.PDF',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1351, 1352, 1346, 1345]
    },
    {
      id: 122,
      name: 'Flush Height Return',
      fileName: '242-0002.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0002.pdf',
      seriesIdArray: [16, 17, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1069, 1072, 1255, 1066, 1035, 1067, 1064, 1253, 1070, 1036, 1068, 1062, 1065, 1034, 1071, 1063]
    },
    {
      id: 123,
      name: 'Flush Height Return',
      fileName: '242-0024.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0024.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1623, 1609, 1610, 1608, 1611]
    },
    {
      id: 124,
      name: 'Flush Height Return',
      fileName: '242-9346.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9346.pdf',
      seriesIdArray: [33, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [4163, 3173, 3176, 4164, 4167, 3171, 3174, 4168, 3172, 3175]
    },
    {
      id: 125,
      name: 'Folding Leg Installation',
      fileName: '664-1202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1202.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2773, 2667, 2670, 2673, 2699, 2713, 2736, 2668, 2671, 2674, 2763, 2783, 2726, 2666, 2706, 2746, 2669, 2672]
    },
    {
      id: 126,
      name: 'Foot Platform Installation',
      fileName: '56-0430.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0430.pdf',
      seriesIdArray: [66],
      serialNumberIdArray: [],
      basemodelIdArray: [2241]
    },
    {
      id: 127,
      name: 'Frame and Tile Panel System',
      fileName: '343-2270G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2270G.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3760, 3385, 3491, 3591, 3700, 3554, 3677, 3508, 3531, 3468, 3362, 3614, 3637, 3674, 3697, 3574, 3720, 3777, 3597, 3548, 3448, 3368, 3408, 3737, 3345, 3534, 3342, 3511, 3365, 3488, 3388, 3680, 3657, 3611, 3571, 3763, 3617, 3425, 3402, 3382, 3551, 3528, 3428, 3405, 3740, 3654, 3717, 3757, 3780, 3354, 3477, 3454, 3391, 3723, 3414, 3583, 3660, 3331, 3500, 3563, 3417, 3517, 3666, 3540, 3769, 3706, 3729, 3494, 3557, 3411, 3434, 3703, 3580, 3480, 3334, 3374, 3328, 3520, 3351, 3394, 3743, 3766, 3371, 3640, 3497, 3348, 3560, 3514, 3623, 3474, 3663, 3686, 3600, 3537, 3423, 3569, 3377, 3446, 3652, 3460, 3775, 3606, 3669, 3715, 3523, 3692, 3486, 3440, 3360, 3383, 3589, 3689, 3675, 3612, 3337, 3400, 3772, 3626, 3526, 3403, 3503, 3695, 3566, 3735, 3712, 3778, 3586, 3632, 3609, 3709, 3732, 3397, 3340, 3483, 3506, 3466, 3420, 3380, 3357, 3515, 3615, 3369, 3738, 3638, 3346, 3575, 3406, 3492, 3386, 3598, 3509, 3532, 3409, 3432, 3681, 3744, 3698, 3658, 3329, 3635, 3718, 3572, 3618, 3426, 3495, 3595, 3343, 3558, 3366, 3535, 3512, 3472, 3641, 3724, 3578, 3655, 3701, 3678, 3363, 3452, 3781, 3489, 3389, 3412, 3349, 3592, 3415, 3438, 3584, 3753, 3707, 3561, 3730, 3538, 3621, 3355, 3378, 3398, 3684, 3375, 3524, 3501, 3352, 3644, 3627, 3604, 3564, 3667, 3518, 3478, 3541, 3690, 3664, 3687, 3395, 3750, 3704, 3727, 3481, 3418, 3335, 3747, 3601, 3624, 3332, 3544, 3458, 3372, 3498, 3521, 3710, 3676, 3507, 3484, 3630, 3653, 3530, 3361, 3338, 3759, 3570, 3547, 3739, 3344, 3613, 3401, 3636, 3510, 3487, 3573, 3424, 3713, 3384, 3756, 3381, 3358, 3587, 3550, 3464, 3673, 3656, 3527, 3719, 3610, 3504, 3633, 3696, 3670, 3421, 3567, 3593, 3693, 3444, 3364, 3404, 3733, 3341, 3490, 3699, 3722, 3745, 3553, 3576, 3622, 3768, 3430, 3330, 3599, 3516, 3370, 3476, 3539, 3347, 3367, 3659, 3762, 3456, 3785, 3393, 3493, 3533, 3556, 3619, 3470, 3682, 3596, 3373, 3519, 3450, 3350, 3742, 3642, 3602, 3579, 3410, 3496, 3390, 3413, 3536, 3513, 3387, 3685, 3679, 3725, 3702, 3765, 3662, 3639, 3668, 3714, 3522, 3499, 3399, 3691, 3485, 3422, 3754, 3562, 3708, 3605, 3582, 3651, 3728, 3628, 3751, 3336, 3479, 3416, 3462, 3376, 3525, 3353, 3502, 3588, 3565, 3419, 3711, 3734, 3442, 3542, 3771, 3625, 3665, 3688, 3359, 3436, 3774, 3482, 3356, 3379, 3585, 3748, 3608, 3671, 3545, 3333, 3396]
    },
    {
      id: 128,
      name: 'Frame and Tile System- French',
      fileName: '143-0118.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0118.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3518, 3349, 3747, 3618, 3595, 3332, 3724, 3678, 3372, 3701, 3389, 3704, 3492, 3412, 3641, 3578, 3538, 3727, 3515, 3366, 3664, 3601, 3621, 3598, 3575, 3452, 3498, 3744, 3644, 3329, 3681, 3352, 3415, 3658, 3638, 3535, 3684, 3369, 3512, 3432, 3346, 3495, 3472, 3409, 3558, 3610, 3418, 3710, 3501, 3478, 3524, 3670, 3693, 3733, 3395, 3587, 3756, 3381, 3335, 3624, 3687, 3484, 3750, 3421, 3358, 3713, 3690, 3667, 3521, 3375, 3398, 3567, 3438, 3630, 3584, 3458, 3504, 3527, 3627, 3481, 3730, 3604, 3355, 3753, 3378, 3338, 3401, 3464, 3707, 3341, 3387, 3487, 3679, 3533, 3633, 3510, 3410, 3470, 3493, 3450, 3364, 3719, 3696, 3742, 3673, 3404, 3593, 3570, 3530, 3444, 3507, 3656, 3636, 3490, 3759, 3367, 3659, 3384, 3430, 3576, 3344, 3513, 3573, 3596, 3424, 3347, 3653, 3361, 3739, 3762, 3722, 3676, 3699, 3613, 3479, 3456, 3579, 3771, 3625, 3725, 3333, 3602, 3702, 3639, 3685, 3662, 3748, 3642, 3665, 3765, 3688, 3396, 3516, 3539, 3373, 3476, 3499, 3390, 3436, 3350, 3413, 3682, 3728, 3353, 3622, 3599, 3768, 3536, 3376, 3619, 3496, 3745, 3416, 3708, 3785, 3330, 3582, 3393, 3542, 3370, 3519, 3605, 3525, 3502, 3571, 3671, 3548, 3717, 3425, 3379, 3402, 3419, 3442, 3611, 3462, 3356, 3654, 3734, 3485, 3757, 3359, 3608, 3508, 3522, 3342, 3382, 3585, 3774, 3711, 3751, 3422, 3651, 3528, 3737, 3545, 3591, 3674, 3482, 3336, 3399, 3588, 3714, 3691, 3668, 3628, 3488, 3777, 3362, 3754, 3740, 3763, 3617, 3640, 3494, 3371, 3388, 3348, 3411, 3454, 3531, 3780, 3657, 3328, 3365, 3743, 3766, 3428, 3680, 3491, 3468, 3405, 3554, 3703, 3537, 3514, 3345, 3614, 3720, 3474, 3368, 3697, 3760, 3408, 3723, 3677, 3385, 3700, 3574, 3597, 3551, 3637, 3534, 3448, 3660, 3511, 3686, 3732, 3586, 3394, 3663, 3357, 3580, 3626, 3772, 3434, 3540, 3517, 3709, 3623, 3600, 3477, 3500, 3523, 3420, 3351, 3334, 3374, 3397, 3460, 3337, 3583, 3414, 3706, 3606, 3666, 3689, 3729, 3497, 3669, 3331, 3769, 3377, 3520, 3503, 3480, 3440, 3417, 3566, 3354, 3778, 3363, 3655, 3572, 3426, 3486, 3380, 3340, 3532, 3509, 3403, 3569, 3343, 3592, 3712, 3695, 3718, 3781, 3735, 3632, 3609, 3675, 3383, 3483, 3775, 3698, 3506, 3406, 3466, 3489, 3423, 3446, 3615, 3360, 3738, 3715, 3692, 3635, 3612, 3400, 3526, 3386, 3589, 3652]
    },
    {
      id: 129,
      name: 'Frameless Glass Installation',
      fileName: '143-0160.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0160.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3645, 3648, 3568, 3631, 3634, 3594, 3620, 3783, 3646, 3649, 3581, 3647, 3650, 3607]
    },
    {
      id: 130,
      name: 'Front-to-Rear Mounting Bracket',
      fileName: '42-2390.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2390.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1382]
    },
    {
      id: 131,
      name: 'Full Height Pedestal',
      fileName: '242-7223.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7223.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [871, 866, 1152, 864, 870, 1154]
    },
    {
      id: 132,
      name: 'Full Length Pedestal',
      fileName: '242-7072.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7072.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1671, 1672]
    },
    {
      id: 133,
      name: 'Full Length Pedestal',
      fileName: '242-8886.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8886.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1712, 1713, 1716]
    },
    {
      id: 134,
      name: 'Further Packet',
      fileName: '3430358000G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430358000G.pdf',
      seriesIdArray: [6],
      serialNumberIdArray: [],
      basemodelIdArray: [9436, 216, 9419, 9373, 199, 9396, 9379, 9356, 9416, 196, 9393, 9353, 9439, 9376, 9399, 9382, 9428, 9359, 9405, 208, 9365, 205, 9402, 9362, 9385, 9425, 9422, 202, 9434, 9411, 9388, 214, 191, 9371, 9394, 211, 9408, 9368, 9391, 9414, 9431, 194, 9437, 9420, 9374, 200, 9397, 9380, 9357, 9417, 197, 9377, 9354, 9423, 203, 9400, 9360, 209, 9406, 9389, 9366, 9429, 9426, 206, 9403, 9386, 9409, 9363, 212, 189, 9383, 9375, 9412, 192, 215, 9435, 9372, 9418, 198, 9395, 9432, 9355, 9392, 9415, 9438, 9369, 195, 9421, 9398, 201, 9381, 9358, 9404, 9378, 9424, 9401, 204, 9361, 9384, 9413, 9390, 9367, 193, 207, 9410, 9364, 9387, 9427, 213, 190, 9433, 9370, 9430, 210, 9407]
    },
    {
      id: 135,
      name: 'Ganging Bracket',
      fileName: '664-0248.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0248.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2203]
    },
    {
      id: 136,
      name: 'Ganging Chair Installation',
      fileName: '46-1042.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1042.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [4332, 4335, 4338, 4330, 4333, 4336, 4331, 4334, 4337]
    },
    {
      id: 137,
      name: 'Ganging Corner Table',
      fileName: '46-1044.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1044.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [4342, 4328, 4329, 4327]
    },
    {
      id: 138,
      name: 'Ganging Glide',
      fileName: '42-9950.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9950.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1392, 1390]
    },
    {
      id: 139,
      name: 'Ganging Hardware Installation',
      fileName: '664-2001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-2001.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2627]
    },
    {
      id: 140,
      name: 'Ganging In-Line Table',
      fileName: '46-1043.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/46-1043.pdf',
      seriesIdArray: [62],
      serialNumberIdArray: [],
      basemodelIdArray: [4331, 4328, 4340, 4337, 4329, 4343, 4332, 4338, 4341, 4330, 4327, 4339, 4336]
    },
    {
      id: 141,
      name: 'Glass Modesty Panel',
      fileName: '242-7169.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7169.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [952, 953, 954]
    },
    {
      id: 142,
      name: 'Glide Adjustment',
      fileName: '42-2336OBSOLETE.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2336OBSOLETE.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3924, 3927, 3930, 3916, 3933, 3936, 3922, 3919, 3931, 3925, 3928, 3937, 3914, 3917, 3934, 3923, 3926, 3920, 3932, 3929, 3915, 3918, 3935, 3921]
    },
    {
      id: 143,
      name: 'Glide Installation',
      fileName: '42-5604.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-5604.pdf',
      seriesIdArray: [55],
      serialNumberIdArray: [],
      basemodelIdArray: [1393, 1394]
    },
    {
      id: 144,
      name: 'Glide Installation',
      fileName: '46-0062.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/46-0062.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2665]
    },
    {
      id: 145,
      name: 'Glide Installation',
      fileName: '143-0500.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-0500.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2654, 2652, 2656, 2653]
    },
    {
      id: 146,
      name: 'Glide Tower ',
      fileName: '42-2333.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2333.pdf',
      seriesIdArray: [68, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [1313, 4118, 4119, 4117, 4120]
    },
    {
      id: 147,
      name: 'Handle Installation',
      fileName: '143-1151.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1151.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2660, 2657, 2652, 2656, 2653]
    },
    {
      id: 148,
      name: 'Hang Rail Kit',
      fileName: '143-0103.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0103.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2293]
    },
    {
      id: 149,
      name: 'Hanging Pedestal',
      fileName: '42-2330OBSOLETE.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2330OBSOLETE.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1271, 1274, 1272, 1275, 1270, 1273]
    },
    {
      id: 150,
      name: 'Hanging Pedestal',
      fileName: '56-0338.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/56-0338.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3874, 3871, 3880, 3877, 3872, 3878, 3875, 3881, 3873, 3870, 3879, 3876]
    },
    {
      id: 151,
      name: 'Hanging Pedestal',
      fileName: '242-7222.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7222.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1151, 863]
    },
    {
      id: 152,
      name: 'Hanging Reception Unit',
      fileName: '242-9429.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9429.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1023]
    },
    {
      id: 153,
      name: 'Hangrail Installation',
      fileName: '242-0150.PDF',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Paoli%20Instruction%20Sheets/242-0150.PDF',
      seriesIdArray: [25, 71, 57, 34, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [2506, 2486, 1158, 2509, 1152, 1636, 2489, 1633, 1610, 1264, 2492, 2515, 2498, 3205, 3182, 3202, 2495, 1161, 1267, 1250, 3185, 2512, 1625, 3251, 1608, 3254, 2501, 2381, 1628, 3188, 3208, 1611, 2504, 2507, 3200, 2493, 1159, 2510, 2490, 2513, 1634, 2487, 1265, 3183, 3229, 3206, 2499, 1248, 1623, 2516, 2496, 3203, 1251, 1626, 3186, 3252, 1609, 1632, 1254, 3189, 2508, 1629, 1635, 2502, 1154, 2505, 2488, 2514, 2494, 3181, 2491, 1160, 2511, 1266, 3201, 3207, 3184, 3204, 3253, 3230, 3190, 2500, 1252, 2503, 3187, 3250, 1627, 2497, 1249]
    },
    {
      id: 154,
      name: 'Hangrail Installation',
      fileName: '242-7440.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7440.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1205, 1245, 1242, 1162, 1222, 1257, 1180, 1206, 1166, 1243, 1163, 1246, 1223, 1235, 1244, 1158, 1181, 1178, 1204, 1164, 1207, 1247, 1259, 1233]
    },
    {
      id: 155,
      name: 'Hardwire Power In-Feed',
      fileName: '43-0179.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/43-0179.pdf',
      seriesIdArray: [68],
      serialNumberIdArray: [],
      basemodelIdArray: [2223, 2224]
    },
    {
      id: 156,
      name: 'Hollow Base Installation',
      fileName: '664-0358.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0358.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4110, 4111, 4101, 4095]
    },
    {
      id: 157,
      name: 'Hutch Assembly',
      fileName: '56-0395.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/56-0395.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1349, 1350, 1347, 1348]
    },
    {
      id: 158,
      name: 'Hutch O-Leg',
      fileName: '242-9825.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9825.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2430, 2434]
    },
    {
      id: 159,
      name: 'Hutch Shelf',
      fileName: '242-9826.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9826.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2439, 2436, 2442, 2432]
    },
    {
      id: 160,
      name: 'Involve Packet',
      fileName: '343-2950.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2950.pdf',
      seriesIdArray: [7],
      serialNumberIdArray: [],
      basemodelIdArray: [7876, 10747, 6333, 10724, 6310, 6379, 6456, 5151, 6356, 8022, 6479, 6502, 7999, 7976, 6525, 7853, 6210, 10893, 5274, 6164, 10847, 5228, 11039, 6018, 5374, 5397, 5895, 10993, 6087, 6064, 8314, 8122, 8145, 9994, 8245, 5566, 10017, 10870, 5795, 5297, 8414, 6187, 11162, 93, 5603, 5789, 8729, 10057, 6004, 8328, 5858, 5981, 8520, 11076, 5666, 5835, 11222, 5812, 5380, 5772, 8391, 8082, 8474, 11139, 5188, 5526, 5334, 6227, 5918, 6419, 9665, 5941, 6396, 10830, 5420, 10853, 8689, 7870, 5165, 5251, 6247, 8168, 8497, 8105, 10810, 10916, 5749, 5357, 8062, 6439, 5337, 6001, 5978, 5878, 11225, 67, 6270, 5437, 6519, 9954, 8377, 8039, 5483, 6024, 6416, 8331, 5775, 6316, 5540, 8457, 6393, 10000, 5609, 8792, 10143, 6081, 6293, 6542, 9874, 8165, 8251, 6150, 5211, 5460, 5852, 5311, 8016, 10180, 5752, 11013, 6144, 8308, 8706, 8683, 11145, 5171, 11099, 5148, 5689, 11036, 6127, 11082, 8228, 8769, 8142, 5626, 6167, 11185, 5234, 8480, 8291, 5563, 8268, 5586, 6253, 5712, 11059, 6104, 90, 5500, 8746, 6041, 8205, 5649, 6190, 8354, 9977, 5623, 9868, 73, 5669, 10083, 9914, 5646, 5792, 8371, 10037, 8709, 5692, 5815, 8686, 5838, 8417, 5984, 8517, 8394, 5961, 11096, 8225, 5915, 11142, 5523, 5769, 5377, 5477, 5231, 8102, 5254, 8079, 11019, 10950, 6207, 8786, 10850, 7979, 8002, 6107, 6230, 8271, 11119, 5546, 10727, 6436, 5938, 6399, 5354, 8042, 8065, 7996, 8019, 5294, 7873, 5317, 6522, 5248, 6330, 5271, 6353, 6376, 6459, 5440, 6067, 10790, 5875, 11182, 6313, 8188, 10744, 9662, 5921, 5208, 5706, 8125, 5729, 8434, 5400, 10873, 10120, 7956, 5686, 8148, 11202, 5463, 5855, 6482, 6290, 8454, 11159, 10077, 10767, 5898, 5291, 8208, 8231, 11079, 11056, 5314, 5145, 5629, 8772, 10100, 5583, 5832, 11179, 5191, 6124, 6462, 8477, 6170, 8085, 8185, 7959, 87, 6250, 5732, 6273, 5709, 6373, 10999, 5417, 6044, 10764, 8059, 5168, 8500, 5560, 11205, 10913, 5503, 5457, 8374, 8397, 6336, 8351, 5958, 9871, 7856, 6499, 5935, 9894, 6476, 9957, 10930, 11228, 8437, 8288, 8334, 10890, 70, 5480, 6021, 4046, 8789, 6061, 8766, 5755, 5543, 5520, 6084, 8248, 5394, 8099, 5214, 5606, 6233, 11165, 10867, 6296, 6539, 8460, 8703, 11016, 6147, 8311, 5998, 8162, 10793, 5220, 8114, 8091, 8068, 7945, 8045, 5366, 5174, 5343, 6425, 5197, 5320, 6402, 11131, 8237, 8191, 8383, 11085, 10939, 9880, 11231, 8337, 5658, 5466, 5964, 5489, 5987, 5589, 6179, 6256, 6156, 6279, 8214, 8712, 5950, 6448, 5758, 10962, 8798, 8506, 11062, 5718, 6050, 9963, 5741, 99, 76, 5695, 6027, 5887, 8466, 8489, 8443, 4052, 8274, 6173, 11191, 5572, 5781, 6219, 10049, 6365, 9857, 8775, 5137, 5635, 6133, 5612, 6110, 8031, 11045, 6302, 5443, 11214, 8297, 11108, 5804, 5549, 7968, 10132, 5157, 6196, 7862, 8360, 6239, 6262, 8254, 8423, 6408, 8400, 8277, 8300, 10979, 11194, 7882, 10112, 10833, 5180, 5721, 5383, 5970, 5821, 6362, 7985, 5429, 5924, 5303, 6465, 5280, 6442, 8008, 10023, 6136, 8128, 10856, 8692, 8151, 10776, 5901, 11168, 5595, 5509, 5844, 6236, 7859, 6385, 5360, 6073, 5672, 5217, 5194, 6528, 8048, 10942, 5735, 10063, 6213, 8134, 5532, 6511, 8088, 11208, 5469, 6276, 10879, 8715, 10753, 6010, 8174, 9671, 10730, 10902, 5492, 8197, 6033, 8025, 9648, 5798, 10126, 9883, 7962, 5257, 6339, 8260, 8503, 5406, 5947, 8111, 6488, 5884, 8801, 5907, 8778, 5715, 6053, 6030, 5761, 6007, 5738, 5861, 5569, 8440, 6176, 8486, 4049, 9960, 11188, 9860, 10006, 11042, 6299, 5446, 5423, 9668, 6322, 8363, 5638, 6130, 8294, 5323, 8194, 5346, 8171, 5615, 7965, 8463, 8071, 5154, 6199, 11211, 6491, 10813, 11111, 10029, 7948, 10982, 9654, 11128, 11151, 5200, 6428, 8380, 5177, 6259, 8426, 6505, 5240, 5486, 6113, 9900, 5632, 5678, 5824, 7988, 8234, 11065, 10069, 6345, 8340, 10736, 6153, 8317, 5592, 8795, 6282, 8403, 5263, 6090, 8509, 6047, 8211, 9877, 5655, 5698, 9983, 96, 5506, 5552, 6216, 5575, 8446, 9651, 11002, 11171, 9674, 9920, 11025, 11148, 8131, 79, 5237, 6116, 6508, 8523, 4055, 5134, 5675, 5283, 5529, 6070, 10876, 5801, 10733, 10899, 5944, 10043, 8051, 8028, 10192, 10756, 8343, 8320, 5403, 8108, 6485, 5260, 6093, 6342, 8257, 5652, 6193, 8357, 5386, 6382, 5409, 6405, 8280, 5340, 5363, 6359, 5881, 7879, 5864, 8420, 10882, 10750, 5426, 5927, 6422, 5818, 6468, 6319, 8483, 5967, 5778, 8005, 5277, 5990, 7982, 8695, 5300, 8217, 5512, 5841, 10169, 10773, 10859, 5904, 5449, 6531, 6445, 8154, 8137, 5243, 5458, 5266, 5435, 5289, 5412, 11223, 5389, 11200, 5143, 8475, 6471, 10739, 5581, 10931, 11177, 6517, 10785, 5535, 10885, 5727, 9657, 8329, 7991, 8429, 8183, 8283, 8037, 85, 5681, 6348, 8767, 6371, 9949, 9972, 5558, 6056, 10762, 11154, 5166, 6248, 6142, 8306, 8804, 10862, 6540, 8698, 5850, 8014, 8406, 5956, 5764, 5933, 5910, 68, 5973, 6079, 6411, 5827, 6165, 6019, 10971, 8054, 5349, 8266, 10994, 5326, 8744, 10802, 8223, 6325, 9995, 5518, 8097, 5541, 8074, 8246, 6388, 6102, 10908, 5498, 6494, 10822, 5306, 11014, 5604, 5996, 8160, 10722, 5790, 5767, 8684, 9348, 5744, 6285, 11217, 6308, 9889, 6331, 8323, 9866, 8346, 7851, 8369, 5226, 5475, 8392, 8143, 8784, 5867, 10158, 812, 5329, 6228, 8220, 8243, 5352, 10825, 5687, 5664, 6205, 5452, 8120, 6434, 8512, 5203, 8449, 5893, 5993, 6534, 5601, 11160, 4058, 8017, 7994, 8472, 8495, 5618, 9946, 10848, 5916, 6457, 5140, 5186, 8432, 5578, 6119, 11137, 6394, 8409, 10118, 5375, 8080, 6159, 6182, 82, 5641, 9969, 5249, 6245, 7954, 5853, 10181, 5312, 5555, 5163, 5704, 7868, 6096, 6145, 6122, 5930, 6099, 5953, 6076, 6222, 5784, 10098, 5830, 5976, 6368, 6268, 6414, 9906, 10805, 8386, 10782, 5707, 5538, 5515, 5807, 5309, 10905, 5415, 8263, 6391, 8057, 5999, 8157, 8163, 11011, 7865, 8455, 10888, 7971, 5624, 8349, 5146, 5223, 6474, 8372, 6497, 11174, 6451, 9869, 5392, 6305, 8226, 5286, 8286, 8180, 8094, 5478, 8140, 5870, 8034, 10842, 5432, 6514, 9952, 10759, 6016, 88, 6039, 5561, 6059, 10951, 5369, 6082, 8787, 5890, 8309, 8807, 8117, 8203, 5847, 8011, 10865, 5455, 6537, 8701, 8469, 6477, 6454, 6431, 5598, 5621, 5644, 7974, 9989, 7997, 5936, 8515, 8492, 7951, 5913, 10845, 11094, 8177, 6162, 9912, 6062, 8718, 8077, 8741, 6013, 10427, 8412, 5395, 5472, 5372, 5495, 6036, 8200, 8100, 6328, 10115, 6185, 7871, 10868, 8704, 5160, 5701, 6242, 11220, 6311, 8303, 5292, 6288, 8326, 5810, 5833, 5269, 11197, 5246, 5787, 5724, 11180, 5770, 9863, 8781, 8240, 5229, 5183, 6265, 10742, 5873, 5332, 9660, 5684, 10945, 6225, 8389, 5661, 6202, 6374, 8366, 6351, 6139, 5747, 10075, 8452, 11157, 5206, 10765, 5481, 8398, 8421, 8352, 8375, 11146, 9895, 9872, 11100, 11123, 9918, 10977, 5819, 9649, 10064, 8083, 5189, 8275, 8521, 8129, 5235, 8229, 5335, 5673, 5527, 5773, 5381, 5627, 7983, 5919, 8790, 5942, 6111, 10731, 10854, 8690, 6234, 10954, 8106, 8498, 5650, 6148, 6042, 8206, 5358, 6440, 5750, 5258, 6340, 6357, 10748, 6334, 6380, 8046, 8023, 6526, 7854, 7877, 8000, 6317, 10147, 5275, 6271, 8192, 5879, 6125, 6211, 9955, 6463, 8481, 8458, 7960, 5965, 8289, 5733, 5710, 10187, 10018, 10877, 5902, 5298, 5796, 6294, 8415, 6188, 6486, 11163, 11206, 5212, 5813, 5149, 10745, 8707, 5318, 7874, 5195, 5272, 5690, 5859, 6354, 5713, 5172, 5295, 5836, 6377, 5736, 6128, 8189, 9663, 11183, 11186, 10104, 5564, 5421, 5587, 8292, 5444, 6105, 6277, 8269, 6254, 5985, 10917, 91, 8063, 9978, 6048, 8212, 10768, 11209, 8504, 7963, 74, 5979, 10911, 97, 10934, 6025, 6002, 9961, 6480, 6503, 8518, 8441, 10894, 5570, 7977, 5962, 5438, 5524, 6520, 5484, 6065, 4050, 10001, 8378, 8040, 5398, 8315, 6417, 11020, 5610, 8103, 6088, 8338, 6151, 5939, 10871, 5461, 5547, 8166, 6543, 9875, 8793, 8252, 6360, 7880, 6068, 10751, 6460, 8770, 6506, 6314, 5876, 6214, 6022, 5922, 6168, 5730, 8149, 8126, 5278, 7957, 10897, 10974, 10874, 8026, 6483, 8249, 5607, 7857, 11166, 11203, 10121, 5899, 5401, 5501, 5507, 6191, 8355, 5209, 5799, 6291, 5647, 5361, 5338, 5670, 5816, 8395, 5169, 5839, 10038, 8418, 11143, 11226, 5192, 8524, 10834, 5584, 8478, 5776, 8332, 8086, 5232, 5753, 5255, 6251, 6274, 6443, 5424, 6231, 7980, 6208, 9669, 8003, 10728, 6400, 11120, 10814, 6337, 8501, 8109, 8066, 10058, 10081, 6028, 8020, 8043, 5982, 5882, 5341, 5667, 6005, 6523, 5959, 6500, 5487, 6423, 9958, 5521, 8438, 11140, 11229, 71, 8335, 9855, 6085, 11017, 8435, 5756, 4047, 9666, 6297, 6420, 6397, 5544, 8169, 5464, 8796, 5856, 5215, 5252, 5793, 8461, 8312, 9878, 5315, 8232, 11103, 5693, 10725, 5152, 5716, 8710, 8687, 5630, 6257, 11189, 5378, 6171, 8773, 8186, 5896, 5567, 8146, 10044, 10851, 5441, 6108, 8272, 5590, 5418, 6131, 8123, 8295, 5653, 8060, 5355, 6194, 8358, 6437, 94, 5504, 6045, 8209, 5742, 5765, 9964, 5696, 5719, 77, 5911, 8490, 11169, 5888, 8444, 8467, 8321, 5427, 11192, 5619, 8782, 5865, 9864, 5473, 5573, 5281, 4053, 5327, 6134, 10946, 8006, 6326, 8075, 11046, 6011, 8175, 11023, 6034, 8198, 10754, 6303, 9672, 8298, 5450, 6532, 11215, 5842, 5158, 5550, 5244, 6240, 10817, 10794, 6263, 6403, 8069, 5321, 8238, 11132, 5925, 10986, 6071, 7992, 5181, 6509, 8384, 6117, 10900, 5659, 6157, 11092, 5682, 11069, 5490, 5988, 8152, 5467, 6180, 8713, 8344, 11155, 5404, 8450, 5510, 5596, 8215, 9924, 8407, 5702, 10963, 6094, 8258, 8799, 9881, 6074, 9655, 6097, 8089, 11029, 11006, 4059, 11152, 5241, 11175, 5218, 5533, 5782, 9947, 5141, 6174, 10737, 8235, 5679, 6220, 9858, 8776, 6512, 8135, 6489, 5138, 8032, 8361, 10760, 6346, 83, 10880, 8261, 6197, 5264, 5805, 5407, 5656, 5556, 5948, 8112, 5908, 5931, 7946, 7969, 8424, 5390, 5367, 6449, 5885, 5344, 6426, 8487, 6472, 5868, 5822, 6409, 7986, 6363, 5430, 5971, 11232, 6323, 5304, 6300, 10024, 5633, 10777, 8221, 5155, 8072, 5759, 8464, 10087, 7860, 5994, 6237, 8158, 8401, 5845, 6386, 8009, 10863, 5453, 6535, 8699, 6406, 6429, 10697, 6383, 5224, 6452, 7949, 6306, 8095, 6114, 10797, 5178, 6260, 11066, 5493, 5991, 11089, 5470, 5968, 5301, 6160, 8318, 8241, 8218, 8716, 8341, 5370, 10113, 8049, 10966, 5593, 6091, 10774, 5201, 6283, 8510, 5699, 10176, 5576, 8255, 8470, 8802, 8447, 8779, 8278, 8301, 8324, 11003, 6054, 11026, 11195, 5785, 5862, 6031, 11049, 6008, 80, 8132, 9861, 6223, 4056, 5384, 5722, 10007, 5530, 5161, 6466, 5447, 8364, 8693, 8387, 5616, 8195, 5639, 8172, 10857, 6200, 6529, 10920, 6137, 6243, 11112, 5945, 7866, 10030, 5553, 10983, 5410, 8304, 5364, 5387, 6051, 5905, 7989, 8427, 10883, 5928, 6469, 6320, 8484, 9901, 10837, 10050, 6366, 8281, 8381, 5636, 5779, 8696, 6154, 5513, 6177, 5613, 11072, 8404, 8155, 6140, 10860, 6446, 10170, 11009, 7863, 5307, 5848, 6389, 8012, 11149, 5599, 8115, 8092, 5739, 6077, 9652, 5175, 5198, 11172, 5762, 5221, 5238, 5536, 8178, 5284, 11086, 5135, 5676, 6217, 10734, 5825, 10757, 5802, 8029, 6014, 5324, 5347, 8052, 6280, 5261, 7966, 5951, 6492, 11212, 6343, 8507, 5980, 8705, 8682, 5834, 8513, 5788, 5957, 5811, 5934, 5665, 6080, 6126, 6272, 10056, 9956, 69, 6418, 11138, 8267, 11115, 4045, 8290, 5350, 6395, 5419, 5519, 6226, 8390, 5542, 6203, 8367, 8098, 5250, 6495, 5642, 6103, 7869, 10809, 11015, 8061, 6501, 5267, 6478, 5290, 5459, 6286, 6455, 10723, 6432, 5313, 5436, 6309, 7952, 7975, 10740, 8144, 10786, 10846, 11178, 5227, 6518, 9658, 8038, 8430, 8184, 5373, 6372, 6063, 8768, 5396, 6349, 8121, 10116, 5565, 10763, 10869, 10955, 5204, 6541, 5894, 5851, 8015, 6043, 8207, 5648, 11075, 8496, 11052, 8519, 10039, 10016, 9993, 7978, 5287, 6458, 8227, 8473, 5579, 5828, 5917, 6166, 8081, 5187, 8181, 5625, 6120, 10995, 5705, 5376, 6040, 6369, 10119, 8055, 8104, 5499, 6246, 8416, 9970, 11201, 7955, 8204, 5164, 8745, 6189, 8353, 10746, 5814, 5791, 5954, 5413, 6332, 11224, 6355, 9349, 9890, 8347, 7875, 8370, 9867, 8393, 7852, 5273, 5476, 6269, 5877, 5336, 9664, 9907, 8330, 66, 5728, 6017, 9953, 8284, 11184, 11161, 8244, 5539, 6206, 8785, 5516, 5688, 6057, 6229, 5751, 5210, 6292, 8456, 11012, 5602, 6143, 8307, 10912, 7995, 7972, 8041, 8018, 5247, 6498, 6521, 5293, 5147, 5270, 6475, 9661, 5439, 8287, 8141, 10743, 11181, 8187, 11035, 10889, 11135, 8410, 8433, 9976, 5585, 5662, 6083, 5562, 5685, 6060, 6183, 6375, 5393, 6352, 10076, 8310, 8118, 5891, 5854, 11158, 89, 10866, 8702, 10766, 8493, 5768, 5977, 9913, 11218, 8685, 5960, 8516, 5831, 5914, 10159, 5522, 5330, 6415, 6023, 8078, 8101, 10806, 10826, 10849, 6106, 8270, 5416, 6329, 6435, 5310, 5808, 5937, 10136, 5502, 5745, 6000, 8164, 5353, 6392, 8058, 6335, 8327, 5433, 6312, 8373, 8350, 10726, 11198, 9870, 11221, 5333, 6412, 10929, 5771, 5974, 5230, 6515, 5871, 5874, 8035, 5725, 5184, 5479, 6020, 6266, 10829, 8765, 9996, 8247, 8224, 8124, 8788, 10803, 5748, 5997, 5605, 5207, 5456, 6289, 6538, 8453, 5897, 5356, 6438, 8161, 6146, 8138, 11032, 5622, 6123, 10036, 11055, 5645, 6100, 5668, 7998, 5582, 6163, 11095, 5144, 8476, 10099, 6209, 11141, 5190, 86, 8742, 5708, 6037, 9950, 7958, 5731, 8436, 5496, 6249, 8413, 5167, 8499, 11204, 5794, 7872, 8201, 5559, 6186, 8264, 8805, 9887, 5253, 6003, 6049, 6026, 5857, 5926, 6318, 10148, 5880, 6172, 10002, 6072, 6218, 6464, 8774, 5611, 8482, 5634, 8459, 5734, 10878, 5711, 5442, 8167, 11107, 5213, 6295, 5903, 8153, 8253, 6195, 7861, 8359, 10025, 11207, 10125, 7961, 5405, 6487, 5173, 5505, 8422, 8090, 5150, 5482, 8376, 8399, 11170, 5342, 9896, 11124, 5219, 11147, 5196, 6424, 10978, 5820, 9650, 7944, 10838, 5674, 8336, 11230, 5236, 8230, 5628, 5588, 6086, 8505, 8007, 7984, 8791, 5780, 8313, 5757, 6255, 10732, 6278, 92, 5843, 6341, 6447, 9873, 6149, 6235, 5259, 5651, 98, 5671, 9962, 75, 6504, 8070, 6527, 10062, 8465, 8047, 8024, 8442, 6009, 11144, 5963, 6212, 5571, 5525, 6066, 4051, 5233, 5256, 8173, 8339, 8316, 5399, 9670, 5468, 6301, 8714, 10729, 5760, 10088, 5156, 10872, 5548, 5940, 6481, 6089, 6338, 5697, 5797, 5837, 10769, 8777, 5296, 6378, 5319, 5860, 6401, 6175, 8276, 8190, 5923, 9859, 8236, 5382, 5774, 6315, 5422, 10165, 5445, 6441, 8150, 8127, 6112, 10855, 8691, 8001, 5986, 8213, 8299, 5508, 5900, 5359, 8064, 5339, 8256, 10935, 11150, 5316, 10958, 11127, 5385, 11104, 5362, 5170, 5193, 5677, 8333, 5631, 11227, 5239, 5485, 8087, 5531, 10789, 8379, 7987, 8479, 8233, 5754, 6252, 5777, 6275, 10045, 6467, 6444, 8694, 10068, 5654, 6152, 5462, 6544, 9876, 8794, 10858, 8502, 6238, 8402, 6046, 8210, 5946, 8110, 6169, 10105, 6384, 8708, 5691, 5714, 5883, 5737, 10752, 8439, 8771, 7881, 9959, 8485, 11187, 72, 6361, 6215, 11233, 5279, 4048, 5302, 6298, 11018, 6321, 10998, 8027, 10191, 6129, 8293, 11167, 8250, 10775, 5216, 5545, 8462, 5153, 5608, 7858, 11210, 5800, 7964, 6192, 8356, 5717, 6381, 10772, 5694, 6358, 10749, 5840, 5176, 8419, 5863, 7855, 6404, 8734, 8396, 7878, 8711, 8688, 6258, 5322, 8273, 11190, 5276, 5817, 5425, 5379, 6109, 5966, 5448, 5989, 7981, 10921, 5591, 8004, 5568, 6232, 10019, 6132, 8296, 10852, 8147, 9982, 5299, 6530, 11164, 95, 10082, 8044, 8067, 6006, 9919, 78, 6029, 8021, 5983, 6524, 8084, 6507, 5488, 8130, 8522, 6461, 8382, 10938, 5528, 6069, 9856, 5920, 9667, 5943, 6421, 8170, 10898, 6398, 8193, 10875, 5465, 11024, 5614, 6155, 8319, 6092, 6484, 8107, 5402, 10961, 5551, 9879, 8797, 6264, 6287, 5182, 6510, 6410, 5136, 5972, 6118, 6364, 10094, 5826, 10117, 10970, 5803, 8053, 8030, 8743, 11093, 10801, 8222, 10778, 10901, 5511, 8345, 8451, 7953, 9888, 5497, 5597, 6095, 8259, 9925, 5703, 5205, 5305, 6387, 5995, 8113, 5388, 5411, 11199, 5365, 9865, 5428, 8783, 10884, 5142, 5474, 6470, 5620, 5534, 5866, 9948, 5580, 5726, 8136, 5282, 8282, 10924, 10426, 10947, 11116, 10755, 6012, 8176, 84, 6035, 8199, 6204, 8368, 9673, 5451, 5949, 5557, 5643, 9971, 10861, 6533, 8697, 6141, 8305, 10841, 5932, 5955, 7947, 7970, 7993, 6427, 5414, 5391, 5886, 6055, 6473, 5368, 5909, 6032, 6450, 5617, 8488, 8285, 8431, 9908, 10987, 5517, 6181, 6158, 6324, 5640, 6058, 5491, 8073, 8196, 7867, 8408, 8800, 9882, 10864, 8159, 8700, 5766, 9656, 5720, 5743, 11176, 5265, 11193, 5242, 5179, 8096, 5783, 8322, 10111, 5225, 6221, 6307, 5288, 5829, 5680, 6261, 8182, 10738, 5351, 6347, 5328, 5139, 6135, 8385, 8056, 5657, 6370, 8362, 5594, 8511, 8119, 6496, 11216, 5806, 5892, 11153, 5202, 6198, 6284, 10761, 6433, 11173, 5600, 8494, 8279, 4057, 8302, 8471, 9653, 8448, 8325, 8348, 11219, 11196, 8179, 5285, 10881, 5431, 8425, 5869, 8033, 5723, 8133, 5577, 5331, 5823, 10758, 5185, 6015, 5162, 10735, 6038, 10137, 81, 5262, 6138, 8202, 5846, 6344, 8010, 5746, 6244, 5554, 5454, 6536, 6098, 6121, 6075, 6407, 5929, 5906, 10990, 10798, 6161, 6267, 11136, 5969, 6513, 5494, 5992, 6490, 5471, 8717, 8411, 5514, 6184, 5537, 8740, 8242, 8219, 8050, 5663, 5345, 8262, 8156, 10967, 11010, 5408, 5268, 10154, 10818, 8803, 8139, 8116, 8780, 5763, 6101, 8093, 5199, 5740, 6078, 5222, 5809, 5786, 5245, 6224, 9862, 8239, 10741, 9659, 5683, 5660, 9951, 8388, 5325, 5348, 6350, 8265, 6201, 8365, 11156, 6281, 11213, 5889, 7967, 8216, 8806, 5952, 6493, 10821, 8508, 5434, 6430, 6453, 8445, 6052, 8514, 5912, 7973, 8468, 9965, 8491, 7950, 8428, 6115, 7990, 5975, 6516, 5574, 6367, 9902, 4054, 5872, 6413, 8036, 5849, 10781, 6178, 8342, 5371, 8076, 10804, 5637, 6304, 6327, 10114, 8013, 5308, 6390, 5159, 5700, 6241, 7864, 8405]
    },
    {
      id: 161,
      name: 'Keyboard Platform',
      fileName: '42-2470.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2470.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1388, 1389]
    },
    {
      id: 162,
      name: 'Keyboard Platform',
      fileName: '43-0166.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/43-0166.pdf',
      seriesIdArray: [29],
      serialNumberIdArray: [],
      basemodelIdArray: [1830, 1387]
    },
    {
      id: 163,
      name: 'Keyboard Platform Installation',
      fileName: '42-2287.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2287.pdf',
      seriesIdArray: [57, 29, 58, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [1542]
    },
    {
      id: 164,
      name: 'Keyboard Tray ',
      fileName: '242-7526.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7526.pdf',
      seriesIdArray: [69, 16, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [1103, 1104, 975, 1211, 976]
    },
    {
      id: 165,
      name: 'Kickplate Installation',
      fileName: '42-2465.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2465.pdf',
      seriesIdArray: [39, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [2260, 3858, 2261, 2262]
    },
    {
      id: 166,
      name: 'Kickplate Installation',
      fileName: '56-0334.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0334.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [4034, 4035]
    },
    {
      id: 167,
      name: 'L-Shape End Panel ',
      fileName: '56-0641.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0641.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3081, 3084, 3082, 3079, 3085, 3080, 3083, 3078]
    },
    {
      id: 168,
      name: 'Laminate End Panel with Bracket',
      fileName: '242-9809.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9809.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2384, 2416, 2385, 2415]
    },
    {
      id: 169,
      name: 'Laminate Modesty Panel',
      fileName: '242-9817.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9817.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2428, 2426, 2403, 2429, 2404, 2427]
    },
    {
      id: 170,
      name: 'Laminate X-Base Installation',
      fileName: '664-0028.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0028.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1677]
    },
    {
      id: 171,
      name: 'Lamp Shade Installation',
      fileName: '664-0247.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0247.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2165]
    },
    {
      id: 172,
      name: 'Lateral File Bookcase',
      fileName: '242-7527.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7527.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1078]
    },
    {
      id: 173,
      name: 'Lateral File Bookcase',
      fileName: '242-7670.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7670.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [897, 1173]
    },
    {
      id: 174,
      name: 'Lateral File Cabinet',
      fileName: '42-2306.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2306.pdf',
      seriesIdArray: [61, 36, 42, 23, 35],
      serialNumberIdArray: [],
      basemodelIdArray: [1564, 1418, 2271, 1478, 1558, 1455, 1458, 1581, 1481, 1561, 1544, 1498, 1521, 1584, 1501, 1524, 1461, 1601, 2268, 1587, 1464, 1404, 1424, 1447, 1550, 1573, 1590, 1567, 1504, 1490, 1467, 1593, 1547, 1421, 1444, 1570, 1484, 1602, 1556, 2263, 1579, 1450, 1596, 1473, 1496, 1559, 1456, 1453, 1599, 1430, 1553, 1576, 2266, 1516, 1470, 1493, 1476, 1479, 1588, 1396, 1565, 1419, 1502, 1582, 2272, 1422, 1568, 1545, 1499, 1522, 1459, 1505, 1482, 1562, 1585, 1462, 2269, 1485, 1571, 1471, 1548, 1448, 1465, 1402, 1551, 1574, 1425, 1445, 1491, 1468, 1591, 1451, 1405, 1554, 1428, 1594, 1457, 1494, 1517, 1557, 2270, 1580, 1520, 1497, 1597, 1417, 2264, 1514, 1560, 1583, 2267, 1454, 1600, 1474, 1477, 1577, 1563, 1500, 1403, 1549, 1503, 1463, 1466, 1543, 1589, 1566, 1480, 1460, 1506, 1483, 1446, 1423, 1397, 1420, 1443, 1569, 1586, 1546, 1523, 1472, 1495, 1595, 1449, 1572, 1489, 2265, 1598, 1552, 1575, 1592, 1469, 1515, 1492, 1452, 1555, 1406, 1429, 1578]
    },
    {
      id: 175,
      name: 'Lateral File Installation',
      fileName: '42-2317.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2317.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [2189, 1548, 2169, 2192, 1545, 2172, 2181, 2175, 2178, 1543, 1580, 2167, 2190, 1563, 2184, 1583, 1560, 2187, 2173, 2176, 2170, 2193, 1546, 1558, 1581, 2182, 2185, 2179, 2188, 2168, 2191, 1547, 1584, 2171, 1561, 1544, 2174, 2177, 1559, 1582, 2180, 2166, 1579, 2183, 1562, 2186]
    },
    {
      id: 176,
      name: 'Lateral File Installation',
      fileName: '242-0152.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0152.pdf',
      seriesIdArray: [32, 38, 33, 16, 71, 57, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [2551, 971, 1114, 2548, 2554, 2368, 1100, 2374, 2371, 2892, 2377, 3230, 2549, 4146, 1112, 2546, 883, 2552, 2369, 972, 2555, 1101, 4187, 2375, 2544, 2893, 2372, 4121, 970, 1010, 2550, 1113, 2378, 2547, 881, 993, 1099, 2370, 2891, 1102, 2553, 3229, 4188, 2376, 4145, 4122, 2373, 2545]
    },
    {
      id: 177,
      name: 'Lateral File Installation',
      fileName: '242-7399.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7399.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1210, 1174, 1220]
    },
    {
      id: 178,
      name: 'Lateral File Installation',
      fileName: '242-7405.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7405.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1165]
    },
    {
      id: 179,
      name: 'Lateral Storage Unit',
      fileName: '42-2379.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2379.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [2214, 2211, 3803, 3800, 2212, 2209, 3801, 2215, 2213, 2210, 3802, 2216]
    },
    {
      id: 180,
      name: 'Lectern Installation',
      fileName: '664-0352.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0352.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4102]
    },
    {
      id: 181,
      name: 'LED Light Installation',
      fileName: '242-9813.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9813.pdf',
      seriesIdArray: [71, 29],
      serialNumberIdArray: [],
      basemodelIdArray: [2277, 2280, 2278, 2279]
    },
    {
      id: 182,
      name: 'Leg Installation',
      fileName: '664-0243.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0243.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2206, 2198, 2195, 2207, 2221, 2204, 2222, 2199, 2196, 2205, 2208, 2197, 2220]
    },
    {
      id: 183,
      name: 'Leveling Glides',
      fileName: '242-2500.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-2500.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2946, 2900, 2983, 2903, 2992, 2906, 2995, 2989, 2898, 2998, 2958, 2981, 2895, 2984, 2947, 2901, 2907, 2904, 2944, 2990, 2993, 2996, 2999, 2899, 2985, 2896, 2902, 2982, 2991, 2905, 2948, 3000, 2994, 2980, 2997]
    },
    {
      id: 184,
      name: 'Lock Kit Installation',
      fileName: '242-6944.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6944.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1151]
    },
    {
      id: 185,
      name: 'Lounge Chair Arm ',
      fileName: '42-9501.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9501.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [3281, 3280]
    },
    {
      id: 186,
      name: 'Lounge Chair Pie Connector',
      fileName: '42-9505.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9505.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [3282]
    },
    {
      id: 187,
      name: 'Lumbar Installation',
      fileName: '56-0333.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0333.pdf',
      seriesIdArray: [65],
      serialNumberIdArray: [],
      basemodelIdArray: [3857]
    },
    {
      id: 188,
      name: 'Merge Packet',
      fileName: '343-1830.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1830.pdf',
      seriesIdArray: [8],
      serialNumberIdArray: [],
      basemodelIdArray: [533, 387, 725, 579, 433, 679, 456, 264, 556, 473, 241, 410, 516, 370, 393, 493, 347, 470, 244, 619, 221, 762, 642, 705, 682, 659, 636, 227, 722, 267, 596, 745, 476, 430, 576, 599, 768, 699, 407, 390, 536, 622, 367, 453, 559, 539, 639, 685, 742, 450, 413, 662, 373, 350, 513, 3799, 247, 224, 765, 616, 702, 553, 771, 625, 525, 648, 356, 748, 7887, 442, 250, 273, 519, 379, 688, 665, 708, 602, 439, 731, 462, 754, 605, 588, 542, 565, 628, 479, 651, 416, 353, 253, 230, 376, 276, 399, 422, 568, 522, 668, 691, 6556, 774, 582, 728, 645, 751, 359, 585, 562, 270, 711, 419, 396, 734, 436, 482, 671, 545, 459, 608, 219, 717, 548, 740, 617, 511, 634, 657, 465, 425, 488, 571, 594, 763, 402, 3797, 485, 777, 385, 362, 574, 697, 7936, 611, 471, 448, 7896, 534, 674, 714, 737, 259, 408, 468, 491, 637, 614, 345, 591, 445, 760, 551, 528, 222, 720, 700, 508, 428, 382, 631, 677, 531, 554, 405, 262, 654, 342, 388, 239, 694, 757, 365, 451, 411, 603, 703, 540, 394, 417, 348, 371, 225, 434, 680, 265, 457, 228, 723, 769, 597, 666, 354, 746, 454, 517, 494, 431, 580, 643, 620, 557, 729, 706, 683, 514, 537, 660, 391, 437, 583, 268, 368, 560, 477, 245, 743, 414, 374, 351, 520, 474, 577, 646, 623, 766, 248, 640, 686, 726, 600, 271, 663, 749, 380, 480, 695, 672, 403, 709, 563, 609, 586, 732, 626, 649, 257, 755, 612, 566, 251, 589, 274, 543, 689, 715, 400, 423, 486, 440, 377, 526, 549, 463, 7937, 483, 529, 775, 629, 652, 460, 360, 752, 277, 254, 523, 383, 669, 692, 712, 606, 397, 466, 443, 420, 735, 546, 758, 231, 569, 772, 632, 357, 349, 495, 472, 426, 572, 595, 764, 724, 578, 532, 386, 363, 618, 449, 512, 555, 658, 681, 635, 535, 432, 409, 266, 738, 509, 369, 346, 220, 761, 698, 675, 721, 552, 744, 223, 452, 260, 492, 515, 661, 638, 446, 469, 429, 575, 598, 406, 489, 343, 389, 240, 217, 366, 3798, 701, 615, 592, 678, 741, 718, 412, 655, 263, 564, 418, 372, 541, 395, 518, 226, 687, 272, 664, 770, 641, 249, 747, 355, 704, 581, 378, 478, 627, 558, 730, 252, 392, 667, 690, 455, 604, 621, 246, 644, 415, 607, 398, 375, 707, 229, 352, 684, 544, 438, 269, 767, 461, 435, 773, 481, 727, 750, 601, 458, 538, 561, 521, 475, 584, 624, 647, 710, 587, 633, 610, 441, 487, 733, 364, 464, 756, 656, 218, 696, 716, 739, 547, 424, 447, 524, 673, 527, 550, 401, 258, 650, 753, 275, 776, 361, 573, 510, 7935, 238, 384, 713, 421, 590, 613, 567, 344, 676, 736, 484, 630, 261, 759, 653, 255, 278, 570, 670, 693, 719, 593, 358, 490, 467, 444, 427, 381, 530, 404]
    },
    {
      id: 189,
      name: 'Mobile Pedestal',
      fileName: '42-2230.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2230.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [1279, 1280, 1278]
    },
    {
      id: 190,
      name: 'Mobile Pedestal',
      fileName: '56-0336.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Contain/56-0336.pdf',
      seriesIdArray: [39],
      serialNumberIdArray: [],
      basemodelIdArray: [3899, 3896, 3908, 3885, 3902, 3905, 3882, 3894, 3891, 3911, 3888, 3900, 3897, 3903, 3909, 3886, 3906, 3883, 3889, 3892, 3912, 3898, 3895, 3901, 3884, 3904, 3893, 3907, 3890, 3913, 3910, 3887]
    },
    {
      id: 191,
      name: 'Mobile Pedestal',
      fileName: '56-0638.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0638.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2853, 2851, 2854, 2852]
    },
    {
      id: 192,
      name: 'Mobile Pedestal',
      fileName: '242-7129.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7129.pdf',
      seriesIdArray: [57, 69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1159, 876, 3227, 1160, 877, 1161, 875, 3228]
    },
    {
      id: 193,
      name: 'Mobile Pedestal',
      fileName: '242-9810.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9810.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2540, 2349]
    },
    {
      id: 194,
      name: 'Mobile Pedestal Handle',
      fileName: '42-2398.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2398.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [3247]
    },
    {
      id: 195,
      name: 'Mobile Table ',
      fileName: '42-2391.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2391.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [3283]
    },
    {
      id: 196,
      name: 'Mobile Table',
      fileName: '56-0471.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0471.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1061, 1060]
    },
    {
      id: 197,
      name: 'Modesty Panel ',
      fileName: '242-9655.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9655.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4161]
    },
    {
      id: 198,
      name: 'Modesty Panel Installation',
      fileName: '664-1210.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1210.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2687, 2688]
    },
    {
      id: 199,
      name: 'Modular Credenza ',
      fileName: '242-7067.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7067.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1666, 1667]
    },
    {
      id: 200,
      name: 'Modular Credenza ',
      fileName: '242-8882.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8882.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1710]
    },
    {
      id: 201,
      name: 'Modular Credenza ',
      fileName: '242-9083.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9083.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1145, 1143, 1141]
    },
    {
      id: 202,
      name: 'Modular Desk ',
      fileName: '242-7046.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7046.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1664, 1661, 1662, 1663]
    },
    {
      id: 203,
      name: 'Modular Desk ',
      fileName: '242-7121.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7121.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1261, 1041, 1024, 1256, 1236, 1039, 1045, 1237, 1260, 1043, 1026, 1258]
    },
    {
      id: 204,
      name: 'Modular Desk ',
      fileName: '242-7122.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7122.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1228, 956, 968, 1203, 1011, 994, 1229, 957, 1221, 955, 1013]
    },
    {
      id: 205,
      name: 'Modular Desk ',
      fileName: '242-7230.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7230.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [958, 1202]
    },
    {
      id: 206,
      name: 'Modular Desk ',
      fileName: '242-7231.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7231.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [967]
    },
    {
      id: 207,
      name: 'Modular Desk ',
      fileName: '242-7232.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7232.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [969, 995]
    },
    {
      id: 208,
      name: 'Modular Desk ',
      fileName: '242-7233.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7233.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1014, 1012]
    },
    {
      id: 209,
      name: 'Modular Desk ',
      fileName: '242-8881.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8881.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1709]
    },
    {
      id: 210,
      name: 'Modular Desk ',
      fileName: '242-9560.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9560.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1027, 1044, 1042, 1025, 1040, 1046]
    },
    {
      id: 211,
      name: 'Modular File Installation',
      fileName: '242-7650.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7650.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [867, 865, 1155, 1153]
    },
    {
      id: 212,
      name: 'Modular File Installation',
      fileName: '242-8887.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8887.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1714]
    },
    {
      id: 213,
      name: 'Modular Furniter Installation',
      fileName: '242-7088.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7088.pdf',
      seriesIdArray: [60, 57, 38],
      serialNumberIdArray: [],
      basemodelIdArray: [3254, 3108, 2856, 3251, 2859, 3257, 3111, 3088, 3068, 3105, 3077, 2862, 2908, 4076, 2868, 3260, 3071, 3094, 3097, 2865, 3114, 2911, 3091, 3074, 3100, 2914, 3103, 3266, 3143, 3106, 2871, 3092, 3252, 3072, 2857, 3109, 3086, 3089, 3258, 3112, 2860, 3255, 2863, 3101, 2909, 3261, 2869, 3267, 3095, 4074, 2866, 2912, 3075, 4077, 3098, 2855, 3253, 3107, 3061, 3087, 2858, 3250, 3104, 3144, 3067, 3093, 3110, 3259, 3073, 3256, 2861, 2864, 3113, 3090, 2870, 3062, 4075, 3076, 2867, 2913, 3102, 3096, 3099, 2910, 3145, 4078]
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
      name: 'Modular Reception Desk',
      fileName: '242-9851.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9851.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1022]
    },
    {
      id: 216,
      name: 'Modular Return ',
      fileName: '242-7069.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7069.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1669, 1668]
    },
    {
      id: 217,
      name: 'Modular Return ',
      fileName: '242-7220.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7220.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1224, 998, 1219, 999, 1225, 996, 991]
    },
    {
      id: 218,
      name: 'Modular Return ',
      fileName: '242-7250.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7250.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1000, 1009, 992]
    },
    {
      id: 219,
      name: 'Modular Return ',
      fileName: '242-7523.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7523.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1129, 1127, 1133, 1131]
    },
    {
      id: 220,
      name: 'Modular Return ',
      fileName: '242-8730.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8730.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1123]
    },
    {
      id: 221,
      name: 'Modular Return ',
      fileName: '242-8731.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8731.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1125]
    },
    {
      id: 222,
      name: 'Modular Return ',
      fileName: '242-9082.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9082.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1124, 1130, 1128, 1134, 1126, 1132]
    },
    {
      id: 223,
      name: 'Modular Return- Brace Support',
      fileName: '242-7247.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7247.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [3269, 3272, 3270, 3273, 3271, 3268]
    },
    {
      id: 224,
      name: 'Modular Return- Brace Support',
      fileName: '242-7252.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7252.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1006, 1004, 1002, 1008]
    },
    {
      id: 225,
      name: 'Modular Return- Brace Support',
      fileName: '242-7528.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7528.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1119, 1135]
    },
    {
      id: 226,
      name: 'Modular Return- Brace Support',
      fileName: '242-7529.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7529.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1137, 1121]
    },
    {
      id: 227,
      name: 'Modular Return- Brace Support',
      fileName: '242-7667.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7667.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1001, 1227, 1007, 1005, 1226, 1003]
    },
    {
      id: 228,
      name: 'Modular Return- Brace Support',
      fileName: '242-9081.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9081.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1120, 1138, 1136, 1122]
    },
    {
      id: 229,
      name: 'Modular Short Leg',
      fileName: '242-7201.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7201.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [872, 873]
    },
    {
      id: 230,
      name: 'Nesting Leg Installation',
      fileName: '664-1203.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1203.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2682, 2805, 2765, 2788, 2785, 2768, 2728, 2751, 2711, 2811, 2748, 2731, 2708, 2771, 2803, 2734, 2680, 2809, 2715, 2792, 2775, 2798, 2795, 2755, 2778, 2761, 2738, 2721, 2744, 2758, 2781, 2718, 2741, 2801, 2678, 2701, 2684, 2807, 2790, 2704, 2724, 2753, 2676]
    },
    {
      id: 231,
      name: 'Non-Locking to Locking Door Conversion',
      fileName: '242-8880.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8880.pdf',
      seriesIdArray: [16, 34],
      serialNumberIdArray: [],
      basemodelIdArray: [1269, 904, 1268, 905]
    },
    {
      id: 232,
      name: 'O-Leg Installation',
      fileName: '242-9821.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9821.pdf',
      seriesIdArray: [71, 39],
      serialNumberIdArray: [],
      basemodelIdArray: [3812, 3810, 2356, 2419, 2451, 3811, 2452]
    },
    {
      id: 233,
      name: 'Occasional Table ',
      fileName: '242-6910.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6910.pdf',
      seriesIdArray: [49],
      serialNumberIdArray: [],
      basemodelIdArray: [1487, 1488, 1486]
    },
    {
      id: 234,
      name: 'Occasional Table ',
      fileName: '242-8849.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-8849.pdf',
      seriesIdArray: [54],
      serialNumberIdArray: [],
      basemodelIdArray: [1399, 1400, 1401]
    },
    {
      id: 235,
      name: 'Occasional Table ',
      fileName: '242-9669.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9669.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4162]
    },
    {
      id: 236,
      name: 'Open Stack-On Unit ',
      fileName: '242-9856.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9856.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [929, 933, 925, 939]
    },
    {
      id: 237,
      name: 'Open Stack-On Unit ',
      fileName: '242-9857.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9857.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [917]
    },
    {
      id: 238,
      name: 'Open Stack-On Unit ',
      fileName: '242-9858.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9858.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [915]
    },
    {
      id: 239,
      name: 'Open Stack-On Unit ',
      fileName: '242-9859.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9859.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [921]
    },
    {
      id: 240,
      name: 'Optimize Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [9],
      serialNumberIdArray: [],
      basemodelIdArray: [7646, 7792, 7692, 7769, 7669, 7729, 7560, 7752, 7623, 7815, 7686, 7586, 7775, 7563, 7812, 7712, 7789, 7609, 7649, 7626, 7749, 7643, 7689, 7772, 7795, 7603, 7666, 7709, 7732, 7583, 7606, 7706, 7629, 7566, 7569, 7738, 7592, 7761, 7678, 7615, 7655, 7632, 7798, 7735, 7781, 7758, 7695, 7821, 7672, 7818, 7718, 7612, 7804, 7741, 7635, 7595, 496, 7658, 7572, 7755, 7778, 7801, 7675, 7698, 7575, 7589, 7652, 7715, 7784, 7807, 7684, 7638, 7561, 7661, 7721, 7701, 7744, 7790, 7555, 7624, 7767, 7664, 7687, 7641, 7578, 7601, 7727, 7581, 7704, 7810, 7618, 7681, 7787, 7764, 7598, 7644, 7747, 7724, 7558, 7770, 7621, 7707, 7730, 7630, 7653, 7753, 7693, 7647, 7584, 7607, 7776, 7670, 7713, 7736, 7610, 7750, 7813, 7796, 7673, 7773, 7604, 7710, 7733, 7756, 7587, 7819, 7650, 7627, 7564, 7590, 7690, 7667, 7816, 7567, 7793, 7722, 7822, 7616, 7639, 7799, 7576, 7759, 7805, 7782, 7679, 7702, 7593, 7570, 7633, 7656, 7719, 7742, 7696, 7596, 7765, 7573, 7779, 7556, 7619, 7636, 7659, 7716, 7802, 7785, 7739, 7676, 7699, 7762, 7613, 7745, 7622, 7708, 7814, 7808, 7599, 7685, 7791, 7768, 7662, 7648, 7602, 7728, 7579, 7751, 7585, 7625, 7562, 7688, 7642, 7788, 7665, 7748, 7725, 7705, 7811, 7682, 7771, 7559, 7645, 7731, 7605, 7582, 7668, 7608, 7800, 7714, 7737, 7591, 7631, 7654, 7568, 7571, 7694, 7820, 7671, 7774, 7797, 7711, 7734, 7757, 7780, 7588, 7634, 7565, 7697, 7674, 7611, 7717, 7794, 7651, 7628, 7614, 7777, 7691, 7817, 7754, 7600, 7700, 7577, 7677, 7783, 7760, 7617, 7594, 7640, 7720, 7663, 7829, 7806, 7743, 7703, 7680, 7766, 7803, 7557, 7726, 7657, 7580, 7786, 7740, 7620, 7763, 7597, 7683, 7637, 7723, 7746, 7574, 7660, 7809]
    },
    {
      id: 241,
      name: 'Organizer ',
      fileName: '242-6722.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6722.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [940, 943]
    },
    {
      id: 242,
      name: 'Organizer ',
      fileName: '242-9140.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9140.pdf',
      seriesIdArray: [38, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [2850, 3225]
    },
    {
      id: 243,
      name: 'Over File ',
      fileName: '42-2440.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2440.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [1604, 1605, 1603]
    },
    {
      id: 244,
      name: 'Overhead  Installation',
      fileName: '143-1601.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1601.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2662]
    },
    {
      id: 245,
      name: 'Overhead and Shelf ',
      fileName: '56-0196.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0196.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [1993, 1996, 1991, 1997, 1994, 1992, 1995]
    },
    {
      id: 246,
      name: 'Overhead Panel Mount',
      fileName: '242-9808.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9808.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2453]
    },
    {
      id: 247,
      name: 'Panel Support Bracket',
      fileName: '143-0201.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0201.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [1698]
    },
    {
      id: 248,
      name: 'Panel System Installation Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [28],
      serialNumberIdArray: [],
      basemodelIdArray: [2071, 2048, 1948, 1971, 2008, 2054, 2117, 2094, 1902, 1925, 1839, 1988, 1842, 1965, 2114, 2091, 2154, 2068, 1888, 2131, 2051, 1905, 1928, 1968, 1945, 2137, 2074, 1882, 2011, 2111, 2157, 1885, 2134, 1985, 1845, 1908, 1871, 1848, 1894, 2140, 2040, 1911, 1934, 2077, 2083, 2060, 2014, 2100, 1974, 2123, 2097, 2120, 2020, 1914, 1937, 2160, 1851, 1874, 2057, 1854, 2103, 1977, 1891, 2143, 2017, 2080, 1931, 1963, 1940, 1986, 1917, 2063, 2109, 1840, 2132, 2023, 2086, 1980, 1857, 2046, 2069, 1903, 1834, 1966, 1920, 1943, 2146, 2006, 1880, 2089, 1883, 1983, 2129, 2106, 1897, 1960, 2152, 2043, 2066, 1900, 2149, 2003, 2126, 2112, 1860, 1923, 2009, 1909, 2055, 2155, 1932, 1949, 1972, 2078, 2015, 1926, 2138, 1989, 2052, 2092, 2115, 2075, 2012, 1889, 2098, 1906, 1929, 1846, 1869, 1946, 2118, 2095, 1969, 2158, 2072, 2135, 2147, 2001, 2101, 2124, 1918, 2141, 2084, 2061, 2038, 1981, 1895, 1872, 1912, 2021, 1935, 1898, 1852, 1975, 2144, 2044, 2058, 2081, 2121, 1835, 1892, 1915, 1938, 1961, 2018, 2064, 2104, 2041, 1978, 2127, 2093, 1924, 1987, 1964, 1941, 2110, 1901, 2156, 2070, 2047, 2133, 2153, 2130, 2107, 2007, 1881, 1841, 1904, 1927, 1944, 1967, 2067, 2050, 1858, 2004, 2113, 2090, 1921, 1984, 2087, 2073, 2010, 1947, 2150, 2116, 1887, 2079, 1847, 2039, 1870, 2016, 1893, 1910, 1933, 2099, 2053, 1950, 1973, 2122, 2139, 2076, 2059, 1913, 1990, 2013, 1890, 2159, 2136, 1976, 1907, 2142, 1930, 2056, 2119, 2096, 1970, 1879, 1979, 2085, 2062, 2148, 2102, 2125, 1919, 1896, 1942, 2145, 2022, 1873, 2108, 1833, 2045, 1982, 2082, 2105, 2005, 1959, 1859, 2151, 1936, 1836, 2128, 2019, 2042, 2065, 1922, 1916, 1939, 1962, 1899, 2002, 1853, 2088]
    },
    {
      id: 249,
      name: 'Paper Management Shelf',
      fileName: '242-7193.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7193.pdf',
      seriesIdArray: [17, 34, 57, 69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [2615]
    },
    {
      id: 250,
      name: 'Peninsula ',
      fileName: '42-2362.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2362.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1372, 1381, 1371]
    },
    {
      id: 251,
      name: 'Peninsula ',
      fileName: '242-0009.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0009.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1073, 1074]
    },
    {
      id: 252,
      name: 'Peninsula ',
      fileName: '242-6943.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6943.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [888, 1172, 1169, 892, 889, 886, 1170, 887, 890, 893, 1171]
    },
    {
      id: 253,
      name: 'Peninsula ',
      fileName: '242-7234.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7234.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1167, 884, 1168, 885]
    },
    {
      id: 254,
      name: 'Peninsula ',
      fileName: '242-9662.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9662.pdf',
      seriesIdArray: [32, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [4177, 4178, 4136]
    },
    {
      id: 255,
      name: 'Peninsula Leg Column Retrofit',
      fileName: '242-9431.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9431.pdf',
      seriesIdArray: [57],
      serialNumberIdArray: [],
      basemodelIdArray: [3199]
    },
    {
      id: 256,
      name: 'Peninsula Modesty Panel',
      fileName: '242-6940.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6940.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [894]
    },
    {
      id: 257,
      name: 'Peninsula/Jetty/Boomerang',
      fileName: '242-7226.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7226.pdf',
      seriesIdArray: [38, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [3193, 3007, 3196, 2979, 3008, 2945, 3191, 3194, 3197, 3192, 3009, 3198, 2949, 3195, 3006]
    },
    {
      id: 258,
      name: 'Personal File Center',
      fileName: '42-2375.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2375.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [2166, 2189, 2192, 2169, 2186, 2172, 2175, 2178, 2181, 2184, 2187, 2173, 2190, 2167, 2170, 2193, 2182, 2176, 2179, 2188, 2168, 2185, 2174, 2191, 2177, 2171, 2180, 2183]
    },
    {
      id: 259,
      name: 'Personal Storage Tower',
      fileName: '42-2376.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2376.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [3965, 4002, 4025, 3985, 4008, 4022, 3982, 4005, 3962, 4028, 3988, 3994, 3974, 4031, 3968, 3991, 4014, 3971, 4011, 3980, 4017, 4000, 4023, 3977, 4020, 3997, 4003, 4026, 3986, 3966, 4009, 4032, 3983, 4006, 3969, 4029, 3989, 3963, 3972, 3995, 4018, 3975, 3992, 4015, 3998, 4012, 3981, 4001, 4024, 3984, 4021, 3978, 4004, 4027, 3964, 3987, 4033, 4010, 3993, 3967, 4007, 4030, 3990, 4013, 3970, 3973, 4016, 3999, 3976, 3996, 4019, 3979]
    },
    {
      id: 260,
      name: 'Personal Table ',
      fileName: '664-0249.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0249.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2217, 2218]
    },
    {
      id: 261,
      name: 'Post Leg Installation',
      fileName: '242-9824.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9824.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2411]
    },
    {
      id: 262,
      name: 'Prefix Packet',
      fileName: '3430389000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3430389000.pdf',
      seriesIdArray: [72],
      serialNumberIdArray: [],
      basemodelIdArray: [7495, 7518, 7541, 7535, 7515, 7538, 7475, 7521, 7498, 7478, 7487, 7544, 7481, 7464, 7527, 7504, 7484, 7507, 7524, 7501, 7547, 7533, 7510, 7536, 7513, 7473, 7530, 7470, 7490, 7467, 7493, 7516, 7519, 7542, 7479, 7502, 7482, 7496, 7476, 7522, 7499, 7539, 7511, 7488, 7465, 7525, 7505, 7528, 7462, 7545, 7508, 7531, 7485, 7468, 7534, 7494, 7471, 7474, 7497, 7491, 7514, 7537, 7517, 7477, 7526, 7480, 7503, 7463, 7520, 7543, 7546, 7483, 7540, 7523, 7500, 7466, 7489, 7512, 7472, 7469, 7529, 7506, 7532, 7486, 7509, 7492]
    },
    {
      id: 263,
      name: 'Presentation Cart ',
      fileName: '664-1205.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1205.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2693, 2696, 2691, 2694, 2697, 2692, 2695, 2689, 2690]
    },
    {
      id: 264,
      name: 'Printer Cart ',
      fileName: '242-7666.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7666.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [997]
    },
    {
      id: 265,
      name: 'Pull Installation',
      fileName: '242-9801.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9801.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2498, 2515, 2501, 2395, 2495, 2561, 2507, 2590, 2361, 2487, 2401, 2504, 2381, 2367, 2493, 2516, 2510, 2496, 2347, 2490, 2513, 2499, 2502, 2562, 2396, 2345, 2491, 2508, 2362, 2511, 2488, 2505, 2560, 2514, 2494, 2348, 2497, 2506, 2360, 2543, 2500, 2589, 2486, 2503, 2397, 2346, 2492, 2509, 2366, 2512, 2489]
    },
    {
      id: 266,
      name: 'Queen Anne Base Table',
      fileName: '242-0065.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0065.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1606]
    },
    {
      id: 267,
      name: 'Quick Connectors',
      fileName: '143-0203.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0203.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [1696, 1679, 1682, 1688, 1685, 1691, 1694, 1697, 1683, 1680, 1700, 1689, 1686, 1695, 1692, 1681, 1701, 1678, 1684, 1690, 1687, 1693]
    },
    {
      id: 268,
      name: 'Raceway to Panel Foot Conversion Kit',
      fileName: '56-0415.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/56-0415.pdf',
      seriesIdArray: [27],
      serialNumberIdArray: [],
      basemodelIdArray: [3475]
    },
    {
      id: 269,
      name: 'Reception Return ',
      fileName: '242-9078.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9078.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1676]
    },
    {
      id: 270,
      name: 'Reception Station ',
      fileName: '56-0642.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0642.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3048, 3046]
    },
    {
      id: 271,
      name: 'Reception Station ',
      fileName: '242-0101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0101.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1638, 1639]
    },
    {
      id: 272,
      name: 'Reception Station ',
      fileName: '242-7294.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7294.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1018, 1234]
    },
    {
      id: 273,
      name: 'Reception Station ',
      fileName: '242-7396.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7396.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1116]
    },
    {
      id: 274,
      name: 'Reception Station ',
      fileName: '242-7397.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7397.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1118, 1117]
    },
    {
      id: 275,
      name: 'Reception Station ',
      fileName: '242-9077.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-9077.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1675]
    },
    {
      id: 276,
      name: 'Reception Station ',
      fileName: '242-9141.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9141.pdf',
      seriesIdArray: [38, 57],
      serialNumberIdArray: [],
      basemodelIdArray: [3047, 3226, 3049]
    },
    {
      id: 277,
      name: 'Reception Station ',
      fileName: '242-9657.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9657.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3245]
    },
    {
      id: 278,
      name: 'Reception Station Return',
      fileName: '242-9658.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9658.pdf',
      seriesIdArray: [58],
      serialNumberIdArray: [],
      basemodelIdArray: [3246]
    },
    {
      id: 279,
      name: 'Removable Modesty Panel',
      fileName: '242-9645.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9645.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4124, 4127, 4125, 4123]
    },
    {
      id: 280,
      name: 'Return Assembly',
      fileName: '42-2364.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2364.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1377, 1374, 1380, 1378, 1375, 1373, 1379, 1376]
    },
    {
      id: 281,
      name: 'Return Installation',
      fileName: '242-7123.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7123.pdf',
      seriesIdArray: [16, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [880, 1032, 1164, 1038, 878, 1033, 1162, 1254, 879, 882, 1166, 1163, 1037]
    },
    {
      id: 282,
      name: 'Return Reception Station',
      fileName: '242-7295.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7295.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [1019, 1020]
    },
    {
      id: 283,
      name: 'Return Stack-On Unit ',
      fileName: '242-7421.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7421.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1083, 1084]
    },
    {
      id: 284,
      name: 'Round and Square Table',
      fileName: '42-2393.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2393.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [3277, 3275, 3276]
    },
    {
      id: 285,
      name: 'Shared Overhead Mounting Brackets',
      fileName: '242-9847.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9847.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2454, 2455]
    },
    {
      id: 286,
      name: 'Shared Overhead Post Legs',
      fileName: '242-9846.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9846.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2344, 2380]
    },
    {
      id: 287,
      name: 'Shelf Adjustment',
      fileName: '42-2648.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2648.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [3793, 3796, 3794, 3792, 3795]
    },
    {
      id: 288,
      name: 'Shelf and Tray ',
      fileName: '143-1150.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1150.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2663]
    },
    {
      id: 289,
      name: 'Shelf File Installation',
      fileName: '42-2685.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2685.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [2258, 1411, 1414, 2259, 1412, 1415, 1416, 1413]
    },
    {
      id: 290,
      name: 'Slab End Panel ',
      fileName: '242-9802.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9802.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2414, 2383, 2353]
    },
    {
      id: 291,
      name: 'Sliding Door Installation',
      fileName: '143-0133.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0133.pdf',
      seriesIdArray: [68, 27],
      serialNumberIdArray: [],
      basemodelIdArray: [2243, 2246, 2244, 2247, 2245]
    },
    {
      id: 292,
      name: 'Sliding Door Installation',
      fileName: '242-9829.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9829.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2330, 2539, 2525, 2333, 2345, 2531, 2342, 2319, 2528, 2339, 2537, 2328, 2534, 2325, 2348, 2523, 2337, 2334, 2323, 2346, 2343, 2329, 2521, 2338, 2530, 2321, 2527, 2533, 2347, 2536]
    },
    {
      id: 293,
      name: 'Small Credenza Installation',
      fileName: '242-9848.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9848.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2363, 2357, 2358, 2364, 2359, 2365]
    },
    {
      id: 294,
      name: 'Stack-On Bookcase',
      fileName: '242-0026.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0026.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1621]
    },
    {
      id: 295,
      name: 'Stack-On Cabinet Installation',
      fileName: '56-0472.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0472.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [911, 906, 910, 908]
    },
    {
      id: 296,
      name: 'Stack-On Cabinet with Center Shelves',
      fileName: '56-0476.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0476.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [909]
    },
    {
      id: 297,
      name: 'Stack-On Cabinet with Tired Shelves',
      fileName: '56-0473.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0473.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [907]
    },
    {
      id: 298,
      name: 'Stack-On Door Lock',
      fileName: '242-9115.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9115.pdf',
      seriesIdArray: [16, 25, 17, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [932, 1087, 1084, 1187, 924, 1185, 916, 1620, 1091, 928, 1624, 1183, 1089, 1086]
    },
    {
      id: 299,
      name: 'Stack-On Ganging Panel',
      fileName: '242-9561.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9561.pdf',
      seriesIdArray: [38, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [936, 3010]
    },
    {
      id: 300,
      name: 'Stack-On Organizer',
      fileName: '242-0044.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0044.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1150]
    },
    {
      id: 301,
      name: 'Stack-On Unit ',
      fileName: '242-0027.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0027.pdf',
      seriesIdArray: [25],
      serialNumberIdArray: [],
      basemodelIdArray: [1620, 1622, 1619]
    },
    {
      id: 302,
      name: 'Stack-On Unit ',
      fileName: '242-6942.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-6942.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1189, 1186, 1187, 1188]
    },
    {
      id: 303,
      name: 'Stack-On Unit ',
      fileName: '242-7075.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-7075.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1674, 1673]
    },
    {
      id: 304,
      name: 'Stack-On Unit ',
      fileName: '242-7289.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7289.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1184, 1190, 1185]
    },
    {
      id: 305,
      name: 'Stack-On Unit ',
      fileName: '242-7299.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7299.pdf',
      seriesIdArray: [69],
      serialNumberIdArray: [],
      basemodelIdArray: [1182, 1183]
    },
    {
      id: 306,
      name: 'Stack-On Unit ',
      fileName: '242-7416.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7416.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1088, 1091, 1089, 1090]
    },
    {
      id: 307,
      name: 'Stack-On Unit ',
      fileName: '242-8888.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/242-8888.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [1715]
    },
    {
      id: 308,
      name: 'Stack-On Unit ',
      fileName: '242-9556.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9556.pdf',
      seriesIdArray: [69, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [1193, 924, 930, 1191, 928, 922, 934, 920, 1192, 932, 926, 938, 918]
    },
    {
      id: 309,
      name: 'Stack-On Unit ',
      fileName: '242-9557.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9557.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [916]
    },
    {
      id: 310,
      name: 'Stack-On Unit ',
      fileName: '242-9558.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9558.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [912, 914]
    },
    {
      id: 311,
      name: 'Stack-On Unit ',
      fileName: '242-9641.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9641.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [919, 937, 931, 923, 927]
    },
    {
      id: 312,
      name: 'Stack-On Unit ',
      fileName: '242-9643.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9643.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [913]
    },
    {
      id: 313,
      name: 'Stack-On Unit ',
      fileName: '242-9683.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9683.pdf',
      seriesIdArray: [15],
      serialNumberIdArray: [],
      basemodelIdArray: [2287, 2288]
    },
    {
      id: 314,
      name: 'Stack-On Unit Installation',
      fileName: '242-0090.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0090.pdf',
      seriesIdArray: [38, 33, 25, 71, 57, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [2978, 2955, 3015, 2952, 3018, 2334, 3024, 4169, 3001, 2961, 3233, 4126, 2964, 1607, 3027, 2970, 2967, 2950, 2343, 3016, 2332, 2959, 3019, 2956, 2341, 3025, 2968, 3274, 3028, 3005, 2965, 3017, 2327, 2330, 2951, 2974, 3011, 3232, 3023, 2960, 3020, 2336, 2957, 2969, 2339, 2966, 3012, 3029, 3026]
    },
    {
      id: 315,
      name: 'Stack-On Unit Installation',
      fileName: '242-9660.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9660.pdf',
      seriesIdArray: [57, 32, 33],
      serialNumberIdArray: [],
      basemodelIdArray: [4147, 3168, 3165, 4156, 4150, 4196, 4199, 3166, 4159, 4148, 3169, 4157, 4160, 4197, 4200, 3167, 4149, 3170, 4201, 4158, 4198]
    },
    {
      id: 316,
      name: 'Standing Height Pedestal',
      fileName: '56-0406.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0406.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2400, 2424]
    },
    {
      id: 317,
      name: 'StationMaster ',
      fileName: '43-0602.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/43-0602.pdf',
      seriesIdArray: [67],
      serialNumberIdArray: [],
      basemodelIdArray: [1433, 1427, 1436, 1439, 1442, 1431, 1434, 1437, 1440, 1426, 1438, 1432, 1435, 1441]
    },
    {
      id: 318,
      name: 'Steel Bookshelf Installation',
      fileName: '143-0204.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0204.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [1703, 1706, 1704, 1707, 1705, 1708]
    },
    {
      id: 319,
      name: 'Storage Cabinet Installation',
      fileName: '42-2311.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2311.pdf',
      seriesIdArray: [36],
      serialNumberIdArray: [],
      basemodelIdArray: [3806, 3804, 3805]
    },
    {
      id: 320,
      name: 'Storage Cabinet Installation',
      fileName: '242-0042.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0042.pdf',
      seriesIdArray: [34, 17, 57, 69, 38, 16, 25],
      serialNumberIdArray: [],
      basemodelIdArray: [904, 3234, 1179, 2882, 1637, 3237, 2885, 1268, 2888, 1265, 1079, 1082, 1174, 2874, 902, 3235, 2877, 2886, 905, 1266, 2889, 2883, 3238, 2875, 1269, 2881, 903, 3236, 2884, 2878, 1267, 2887, 2890, 1264, 898, 2873, 2876]
    },
    {
      id: 321,
      name: 'Storage Cube',
      fileName: '242-9812.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9812.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2309]
    },
    {
      id: 322,
      name: 'Stride Benching Packet',
      fileName: '343-2555.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2555.pdf',
      seriesIdArray: [10],
      serialNumberIdArray: [],
      basemodelIdArray: [10261, 10238, 10241, 10258, 10244, 10247, 10250, 10422, 10253, 10419, 10256, 10236, 10259, 10245, 10428, 10239, 10431, 10242, 10420, 10254, 10417, 10248, 10251, 10260, 10237, 10240, 10257, 10234, 10423, 10429, 10246, 10249, 10243, 10421, 10252, 10255, 10418, 10235]
    },
    {
      id: 323,
      name: 'Stride Desking Packet',
      fileName: '343-2375.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2375.pdf',
      seriesIdArray: [11],
      serialNumberIdArray: [],
      basemodelIdArray: [10371, 315, 10348, 338, 10394, 10202, 10225, 10325, 10686, 10494, 10640, 10540, 10832, 10617, 9933, 10909, 10517, 11101, 11038, 10700, 10915, 10892, 10932, 10096, 9, 10477, 10308, 10457, 10265, 10331, 10580, 10972, 11121, 10534, 10454, 10603, 10660, 10205, 341, 318, 10228, 301, 10683, 10142, 10620, 10643, 9930, 10102, 10079, 10471, 10706, 11098, 10557, 11081, 11058, 9999, 10497, 10597, 10474, 10305, 10368, 10268, 10560, 10182, 295, 10374, 10328, 10351, 10637, 10783, 10391, 10975, 9936, 9916, 10222, 10414, 10703, 10680, 298, 10139, 10185, 10285, 9893, 10434, 10388, 10952, 10288, 10311, 10623, 10162, 10554, 10411, 10537, 10514, 10013, 10059, 10992, 10577, 11078, 11118, 10122, 10145, 10451, 10600, 9910, 321, 9973, 10663, 10294, 307, 10440, 10340, 10586, 10486, 10709, 10317, 11001, 330, 10609, 11084, 11061, 10042, 10692, 10194, 9979, 10171, 10500, 10669, 10649, 10065, 10563, 10964, 10085, 10895, 10918, 10941, 10400, 10377, 10626, 9985, 9939, 10715, 10503, 11021, 10480, 11044, 10211, 10354, 10815, 287, 324, 11130, 10274, 10792, 10188, 10589, 10048, 10291, 10337, 10526, 11067, 10463, 11004, 9922, 10314, 10981, 9899, 11027, 9945, 10360, 10666, 10689, 10460, 10652, 10566, 10168, 7549, 10297, 10543, 10151, 10629, 10583, 10437, 304, 327, 11041, 10128, 10022, 10520, 10214, 10712, 10606, 10795, 10131, 10208, 11110, 10231, 10108, 11087, 11064, 10277, 10380, 10546, 10672, 10005, 10646, 10523, 10443, 10397, 10483, 10984, 9942, 11047, 10028, 10835, 10334, 10357, 10812, 10569, 10506, 10271, 10632, 10655, 10678, 10701, 10824, 10532, 10386, 10217, 11070, 9911, 10011, 10409, 10509, 316, 10280, 10140, 11030, 10034, 10618, 10449, 11053, 10555, 10363, 10300, 10323, 10346, 10369, 10469, 10446, 10887, 10784, 10054, 9905, 10595, 9931, 11113, 10031, 10572, 10472, 10174, 10134, 10157, 293, 310, 10721, 10675, 10197, 10635, 10549, 11239, 11090, 10008, 10306, 333, 10698, 10910, 10220, 10612, 10071, 9968, 9991, 10014, 10160, 296, 10283, 11073, 10091, 10552, 10452, 11050, 10658, 10489, 10944, 10343, 10927, 10681, 10535, 10383, 9885, 10406, 10575, 9928, 10320, 10512, 10904, 11033, 10492, 11133, 313, 7552, 290, 10177, 10638, 10200, 10592, 10097, 10074, 10403, 10695, 11236, 10223, 10366, 11007, 336, 10615, 10907, 10466, 10303, 10844, 10326, 10389, 9988, 10529, 10051, 10718, 10263, 10770, 10578, 10478, 9980, 10501, 10103, 10080, 322, 10272, 10601, 10209, 10309, 10395, 339, 10226, 10203, 10186, 299, 10332, 10641, 10661, 10163, 10355, 9897, 10933, 10392, 302, 10292, 10684, 10189, 10438, 10558, 10564, 10807, 10956, 10415, 10266, 10166, 10707, 10040, 11105, 10495, 10541, 10973, 11122, 10581, 10667, 10432, 10455, 10604, 10518, 10996, 325, 10229, 10206, 10183, 319, 10060, 10352, 10106, 10375, 9891, 10329, 9937, 10644, 10521, 10621, 10704, 10896, 10936, 10289, 10312, 10598, 10269, 10959, 10561, 10538, 10515, 9997, 11125, 10584, 10976, 10146, 10335, 10787, 10123, 9974, 10664, 10458, 9917, 10372, 10349, 10827, 10687, 10286, 10435, 10647, 10475, 10624, 9934, 10498, 11102, 10020, 10953, 10412, 10985, 9903, 10839, 10003, 10195, 10172, 10570, 10693, 10670, 10401, 7553, 10072, 10464, 10441, 10109, 10155, 291, 10301, 9986, 10378, 9940, 308, 10587, 10779, 10633, 11237, 10218, 10716, 11022, 10026, 10524, 10547, 331, 10610, 10799, 10338, 10384, 10550, 10527, 11068, 11091, 10650, 10009, 10315, 9923, 10988, 10086, 10447, 10965, 10424, 10627, 10487, 10925, 11028, 10690, 10149, 10816, 10212, 10361, 7550, 10444, 10467, 10398, 10321, 10298, 10275, 10129, 10152, 10544, 311, 10590, 10836, 10713, 11234, 11005, 10613, 10919, 11088, 10046, 10673, 10481, 10092, 10504, 10696, 10567, 10175, 288, 10653, 10461, 10484, 10530, 10922, 10089, 10630, 9943, 305, 328, 11048, 10358, 10507, 10066, 9966, 10607, 10215, 10232, 10819, 10796, 10278, 10341, 10295, 11071, 10381, 10404, 10318, 10710, 11008, 9926, 11077, 11031, 10095, 10287, 10141, 10593, 10662, 11054, 10556, 10364, 10264, 10324, 10347, 10370, 10516, 10493, 10178, 10579, 10433, 10387, 9932, 10410, 340, 10135, 11037, 294, 10204, 317, 10496, 10281, 10676, 10407, 10078, 10642, 10101, 10619, 10948, 10699, 10307, 9992, 10470, 10330, 11074, 10533, 10573, 11114, 10032, 10596, 10055, 10659, 10267, 10808, 11051, 10510, 10490, 10513, 10828, 10390, 10198, 10344, 10636, 10536, 10928, 10682, 10052, 9929, 334, 10413, 10221, 11097, 10015, 11034, 11057, 320, 9892, 10284, 10453, 10430, 10473, 10367, 9975, 10991, 10327, 10968, 10304, 10891, 10350, 10035, 9909, 9886, 11117, 10576, 10599, 10450, 10719, 10656, 10679, 10702, 10184, 337, 11134, 314, 10201, 297, 10639, 10138, 10224, 10616, 10553, 10012, 10161, 300, 10379, 10233, 10333, 9941, 10041, 10525, 10456, 10648, 10164, 10356, 10562, 10539, 10771, 10940, 10685, 10625, 10293, 10124, 10210, 323, 10602, 10316, 10708, 11083, 11060, 11106, 10273, 7548, 10227, 10542, 10668, 10691, 10150, 10791, 10127, 10519, 10462, 9921, 9898, 10393, 10376, 9938, 10831, 10980, 10439, 10502, 10479, 10353, 10957, 11043, 286, 10565, 10416, 10628, 10582, 10482, 10290, 10436, 9984, 9915, 10021, 10997, 326, 10605, 10705, 10313, 10230, 10207, 10061, 10084, 10399, 9998, 11080, 10144, 303, 10190, 10336, 10665, 10622, 10645, 7897, 10167, 10559, 10396, 10914, 10937, 10373, 10296, 10688, 10811, 10499, 9935, 10476, 10960, 10711, 10270, 10585, 10107, 11040, 11063, 11126, 306, 11000, 10004, 10788, 10545, 9981, 10522, 10310, 10459, 10608, 10067, 10133, 10110, 10179, 10279, 10156, 10302, 292, 10448, 10425, 10033, 9987, 11238, 10548, 10717, 10923, 9904, 10531, 10339, 10677, 10485, 10073, 10594, 10571, 10508, 10010, 10402, 11129, 10093, 309, 10047, 10926, 10588, 10488, 10634, 10219, 10070, 10511, 332, 10611, 10903, 10362, 10800, 10823, 10345, 10322, 10299, 10840, 10886, 10282, 10385, 10408, 10714, 10196, 10173, 7554, 10651, 10949, 10843, 10943, 10820, 10989, 10674, 10574, 10382, 10405, 9884, 10505, 10213, 10468, 10445, 10276, 10591, 10199, 312, 9990, 9944, 10359, 10551, 10528, 10720, 10053, 335, 10614, 9967, 10657, 10465, 10442, 10342, 10780, 10027, 10193, 9927, 10568, 10319, 10262, 10654, 7551, 10491, 11109, 289, 10130, 10153, 10969, 10090, 10631, 10906, 10671, 10694, 11235, 10365, 10216, 329]
    },
    {
      id: 324,
      name: 'Stride Panels Packet',
      fileName: '343-2152H.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2152H.pdf',
      seriesIdArray: [12],
      serialNumberIdArray: [],
      basemodelIdArray: [9791, 9754, 9811, 9834, 9731, 9771, 9748, 9817, 9794, 9831, 9854, 9734, 9774, 9797, 9751, 9814, 9837, 9783, 9760, 9820, 9843, 9737, 9800, 9803, 9777, 9763, 9840, 9740, 9757, 9780, 9846, 9823, 9852, 9812, 9729, 9746, 9769, 9826, 9849, 9786, 9809, 9832, 9749, 9789, 9766, 9829, 9806, 9743, 9798, 9752, 9775, 9792, 9835, 9841, 9818, 9755, 9778, 9732, 9795, 9772, 9815, 9758, 9838, 9735, 9844, 9821, 9744, 9784, 9804, 9827, 9761, 9738, 9801, 9847, 9824, 9764, 9741, 9807, 9781, 9813, 9767, 9836, 9850, 9730, 9747, 9770, 9793, 9810, 9833, 9787, 9773, 9750, 9830, 9853, 9790, 9736, 9776, 9799, 9753, 9819, 9842, 9739, 9802, 9756, 9779, 9816, 9733, 9839, 9796, 9822, 9759, 9805, 9828, 9745, 9768, 9851, 9785, 9762, 9825, 9848, 9808, 9788, 9765, 9742, 9845, 9782]
    },
    {
      id: 325,
      name: 'Student Desk ',
      fileName: '143-0102.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0102.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2276, 2274, 2275]
    },
    {
      id: 326,
      name: 'Support Panel Installation',
      fileName: '56-0643.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0643.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2812]
    },
    {
      id: 327,
      name: 'Support Storage Installation',
      fileName: '242-9823.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9823.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [2421, 2564, 2418, 2390, 2387, 2556, 2413, 2559, 2542, 2393, 2382, 2391, 2351, 2557, 2394, 2563, 2417, 2420, 2386, 2389, 2352, 2558, 2541, 2392, 2412]
    },
    {
      id: 328,
      name: 'Surpass Packet',
      fileName: '3090198000REV_D.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/3090198000REV_D.pdf',
      seriesIdArray: [73],
      serialNumberIdArray: [],
      basemodelIdArray: [6753, 6630, 7214, 6776, 6922, 6676, 6822, 7068, 7383, 7360, 6607, 6799, 6899, 7091, 7191, 7460, 7128, 7174, 6570, 7320, 6716, 6982, 7045, 6653, 7151, 7237, 7085, 6567, 7108, 7446, 7423, 7400, 6962, 6670, 6693, 6905, 6836, 7377, 6985, 6593, 7234, 7134, 6756, 7297, 6733, 7274, 7211, 6819, 7071, 6773, 7314, 6882, 7008, 6859, 6796, 7337, 6945, 7317, 7363, 7171, 7148, 6842, 7048, 6942, 7440, 7340, 6650, 7088, 6779, 7111, 6633, 6610, 7280, 6587, 7257, 7065, 6919, 6673, 7217, 6696, 7194, 7002, 7025, 7300, 7131, 7231, 6590, 6759, 7254, 6613, 6736, 7154, 7277, 6713, 6862, 7028, 7403, 7005, 7420, 7443, 6879, 6925, 6965, 7051, 6839, 6816, 7357, 7380, 7294, 6690, 6902, 6988, 6968, 6991, 7014, 7183, 7160, 7037, 7306, 6868, 7260, 6722, 7114, 7452, 6891, 7283, 6599, 6699, 7366, 7100, 7429, 7406, 6739, 6931, 6908, 7343, 6951, 6845, 7323, 7346, 6828, 7369, 6805, 6782, 6928, 7054, 6954, 7077, 6656, 7197, 7157, 6639, 6616, 7180, 6662, 7203, 6725, 6679, 7220, 7266, 6576, 7117, 6765, 6788, 7031, 6702, 7329, 7243, 7094, 6619, 6573, 7409, 6719, 7432, 6742, 6911, 6934, 6642, 7140, 7034, 6948, 7240, 6802, 6825, 7303, 7057, 7163, 6865, 6971, 6579, 7017, 6888, 7449, 6559, 7386, 6994, 6636, 6659, 6682, 6705, 7177, 6974, 7223, 7120, 6885, 7097, 6762, 7426, 6785, 7389, 7246, 6848, 7349, 7326, 7011, 7263, 6871, 7412, 7074, 6808, 7200, 6596, 7137, 6745, 7286, 7229, 7206, 7060, 7398, 7083, 7106, 7352, 7252, 7375, 7129, 6914, 6768, 6791, 6983, 6960, 6691, 6731, 6708, 6754, 6562, 6685, 6668, 6877, 6622, 6814, 7312, 6837, 7335, 7123, 6645, 6900, 7143, 7292, 6897, 6874, 6851, 7212, 7315, 7415, 6774, 6920, 7166, 7461, 6648, 6977, 7189, 7438, 6748, 7289, 7063, 7040, 7086, 6585, 7023, 6671, 7455, 7149, 6608, 6937, 7000, 7392, 6565, 6688, 6588, 6711, 6665, 7003, 6811, 7126, 7103, 6834, 7295, 7332, 7441, 7418, 7226, 7249, 7272, 7355, 7209, 6817, 6771, 6625, 6857, 7080, 7378, 7186, 6751, 6794, 6602, 7269, 6582, 6728, 7066, 6628, 7020, 7146, 7169, 7358, 6997, 6605, 6854, 6940, 7395, 7372, 7232, 6831, 7309, 6917, 7458, 6980, 6957, 6894, 7435, 7043, 7444, 7321, 7298, 7421, 7275, 7175, 7052, 6860, 6883, 6654, 7152, 7344, 6591, 6614, 6783, 6637, 7069, 6677, 6923, 7261, 7115, 7029, 7006, 7198, 7092, 7135, 6820, 6866, 7258, 7361, 7407, 6717, 6740, 7032, 7046, 7281, 6946, 6797, 7338, 7109, 6568, 7447, 7424, 6631, 6969, 7384, 6694, 7172, 6906, 7235, 6843, 6780, 6803, 6657, 6734, 6634, 6757, 6611, 6880, 6926, 7072, 7218, 7026, 7195, 6903, 7095, 7324, 7155, 7132, 7178, 7401, 7009, 6963, 6574, 7241, 6720, 7049, 6986, 6594, 6943, 7112, 6571, 7012, 6966, 6674, 6840, 7381, 7238, 6989, 7089, 6697, 6777, 7255, 7278, 6760, 7301, 7318, 6714, 6823, 7364, 7215, 6886, 6863, 7404, 7427, 6737, 7341, 6949, 6651, 6800, 7192, 7413, 7367, 7221, 7267, 6623, 6577, 7075, 6952, 6746, 7244, 7144, 6846, 7436, 6660, 7038, 6852, 7061, 6829, 6806, 6915, 6975, 7307, 6869, 6723, 7453, 6998, 6892, 7390, 7284, 6700, 7158, 7181, 6663, 6640, 7304, 7204, 6686, 7227, 6617, 6789, 6766, 7430, 7101, 7330, 6560, 6889, 6992, 7015, 7078, 6929, 7055, 6749, 7290, 6600, 7141, 6826, 6849, 7164, 6726, 6680, 6580, 6972, 7310, 6872, 7118, 7018, 7264, 7456, 6703, 6995, 6603, 7287, 6895, 7387, 7347, 7370, 7393, 7201, 7410, 6743, 6912, 6763, 6935, 6978, 6786, 6955, 7433, 7327, 7373, 7350, 6832, 7058, 6909, 7450, 6809, 6932, 7081, 6597, 7138, 6683, 6706, 7207, 7184, 6666, 7224, 6620, 7161, 6769, 7121, 7098, 7247, 7035, 6557, 6643, 6715, 6569, 6669, 7459, 7313, 6838, 7336, 6815, 6938, 6646, 7044, 7253, 7230, 7422, 7084, 7107, 7276, 6583, 7021, 6629, 7167, 6775, 7213, 6861, 7359, 6606, 6692, 6798, 7190, 6755, 6732, 6586, 7250, 6609, 7273, 6709, 6632, 7024, 7124, 7173, 7001, 7150, 6881, 6858, 6944, 6921, 6898, 6875, 7376, 7399, 7353, 6961, 7416, 6835, 6812, 6984, 7047, 7439, 7087, 7064, 7110, 7256, 7402, 6964, 7210, 7356, 6918, 6818, 6626, 6772, 6672, 7187, 7379, 6795, 6566, 6712, 6735, 7316, 7170, 7147, 7127, 7104, 7296, 7233, 7339, 7041, 6649, 7419, 7396, 6778, 7442, 6563, 6878, 7319, 7193, 6958, 6981, 6689, 7293, 6901, 6752, 6652, 6589, 6729, 7130, 7270, 7067, 7004, 7027, 6792, 6855, 7333, 7090, 6941, 6592, 6615, 6638, 6784, 6761, 7405, 6930, 7007, 7428, 6907, 7030, 6738, 7199, 7236, 7136, 7159, 7445, 7299, 7222, 7013, 6967, 6821, 7076, 7382, 6884, 7053, 6598, 6990, 6678, 7070, 6970, 6575, 7116, 7242, 6844, 7093, 6701, 7385, 6993, 6804, 6827, 7345, 6781, 7322, 7259, 6867, 7305, 7368, 7408, 6718, 7219, 6741, 7196, 6655, 7282, 7133, 7179, 7156, 7279, 7302, 7202, 7325, 7448, 7010, 6695, 6887, 6864, 6764, 7056, 6595, 6987, 6681, 6758, 6927, 6618, 7362, 7425, 6904, 7033, 6841, 7096, 6947, 7139, 6801, 7365, 6924, 7262, 6824, 7216, 6744, 7050, 7073, 7342, 6950, 7285, 6658, 6635, 6612, 7153, 7176, 6572, 6973, 6675, 7113, 6721, 6910, 7451, 6847, 7388, 6698, 7239, 6684, 6707, 6730, 6876, 6853, 6830, 6561, 6807, 6661, 7022, 6584, 6976, 7168, 7099, 7122, 7391, 6999, 7291, 7182, 7205, 7351, 7328, 7397, 7374, 7414, 7268, 6767, 6578, 6790, 6959, 6939, 7437, 7245, 6747, 7016, 7039, 7062, 7354, 6724, 6601, 7265, 6813, 7454, 6936, 7142, 6850, 6687, 7228, 6710, 7251, 6913, 7165, 6624, 7431, 7102, 6953, 7125, 7188, 6890, 6647, 7348, 7371, 7394, 7417, 7225, 7271, 6787, 6979, 6956, 7079, 6856, 6750, 7248, 6558, 6873, 6664, 6727, 7119, 7311, 6810, 6833, 6641, 6704, 7331, 6896, 7288, 7208, 6916, 7308, 6667, 6770, 7162, 6621, 7457, 6870, 7411, 6644, 7036, 7434, 7185, 6793, 7334, 6893, 7042, 6564, 7105, 7059, 6581, 7019, 6627, 6933, 7145, 7082, 6604, 6996]
    },
    {
      id: 329,
      name: 'Swivel Tilt Control',
      fileName: '56-0131.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0131.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2252, 2251]
    },
    {
      id: 330,
      name: 'Synchro Tilt Control',
      fileName: '56-0132.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0132.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2253, 2254]
    },
    {
      id: 331,
      name: 'Synchro Tilt Control with Back Adjustment',
      fileName: '56-0133.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/56-0133.pdf',
      seriesIdArray: [48],
      serialNumberIdArray: [],
      basemodelIdArray: [2255, 2256]
    },
    {
      id: 332,
      name: 'T-Base Assembly',
      fileName: '42-2351.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2351.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [4043, 4044]
    },
    {
      id: 333,
      name: 'T-Base Floor Leveling Glide',
      fileName: '143-0200.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0200.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [1702]
    },
    {
      id: 334,
      name: 'Table Assembly',
      fileName: '242-0060.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-0060.pdf',
      seriesIdArray: [17],
      serialNumberIdArray: [],
      basemodelIdArray: [1075]
    },
    {
      id: 335,
      name: 'Table Assembly',
      fileName: '664-2000.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-2000.pdf',
      seriesIdArray: [47],
      serialNumberIdArray: [],
      basemodelIdArray: [2651, 2643, 2649, 2646, 2644, 2647, 2650, 2648, 2645, 2642]
    },
    {
      id: 336,
      name: 'Table Desk ',
      fileName: '42-2360.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2360.pdf',
      seriesIdArray: [22],
      serialNumberIdArray: [],
      basemodelIdArray: [1370, 1367, 1362, 1368, 1363, 1366, 1369, 1364, 1361]
    },
    {
      id: 337,
      name: 'Table Lamp Installation',
      fileName: '664-0246.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0246.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2164]
    },
    {
      id: 338,
      name: 'Tablet Accessory Installation',
      fileName: '664-0241.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/FLOCK/664-0241.pdf',
      seriesIdArray: [43],
      serialNumberIdArray: [],
      basemodelIdArray: [2219]
    },
    {
      id: 339,
      name: 'Tack Board Installation',
      fileName: '43-0610.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/43-0610.pdf',
      seriesIdArray: [34, 71, 57, 17, 69, 58, 32, 15, 33, 16, 25],
      serialNumberIdArray: [],
      basemodelIdArray: [1531, 1528, 1534, 4202, 2290, 1537, 2433, 4205, 1540, 1529, 4151, 1526, 1532, 2431, 1535, 2291, 1538, 2437, 4203, 4206, 1541, 1530, 1527, 2440, 2443, 1539, 1536, 1533, 2438, 4204, 2441, 1525, 2435]
    },
    {
      id: 340,
      name: 'Teacher Station Installation',
      fileName: '143-0100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0100.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2609, 2612, 2607, 2610, 2613, 2608, 2611]
    },
    {
      id: 341,
      name: 'Teacher/Compact ',
      fileName: '143-0099.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-0099.pdf',
      seriesIdArray: [63],
      serialNumberIdArray: [],
      basemodelIdArray: [2604, 2601, 2593, 2596, 2599, 2605, 2602, 2591, 2594, 2603, 2597, 2600, 2606, 2595, 2598, 2592]
    },
    {
      id: 342,
      name: 'Terrace 2.6 Packet',
      fileName: '343-1100.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1100.pdf',
      seriesIdArray: [14],
      serialNumberIdArray: [],
      basemodelIdArray: [3, 4085, 6, 4082, 4083, 4, 4086, 7, 8, 4084, 5, 4081]
    },
    {
      id: 343,
      name: 'Terrace Packet',
      fileName: '343-2270G.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-2270G.pdf',
      seriesIdArray: [13],
      serialNumberIdArray: [],
      basemodelIdArray: [9233, 9210, 9187, 9041, 8918, 9064, 8964, 9110, 9256, 8649, 8749, 9333, 8941, 136, 8543, 8735, 8812, 8672, 9004, 8566, 8958, 9150, 113, 9193, 7942, 7899, 8895, 8981, 8589, 9087, 8732, 8755, 9024, 9047, 9250, 116, 9147, 9296, 8606, 9170, 8629, 8835, 8921, 8858, 6545, 8818, 139, 8583, 9124, 8646, 9273, 9336, 8881, 8569, 8546, 8669, 8815, 8984, 9313, 9290, 7939, 9190, 9276, 1653, 7902, 9084, 9067, 9044, 8898, 9021, 8875, 9213, 9107, 8961, 8652, 9130, 8938, 8901, 8878, 8855, 8563, 6548, 9001, 8609, 9339, 9104, 9127, 9270, 8978, 9027, 8586, 9167, 9253, 9207, 8666, 9316, 8626, 119, 9293, 8752, 9230, 8838, 6554, 9156, 9302, 9010, 8841, 8535, 8549, 8635, 9325, 9033, 9133, 8758, 8927, 122, 8950, 8612, 8910, 105, 8864, 9173, 9342, 9279, 8887, 9116, 9139, 9070, 9093, 8575, 7845, 9319, 8655, 9196, 8529, 9219, 8678, 8990, 8904, 500, 8967, 9305, 8764, 9007, 9030, 9242, 9179, 8552, 8944, 8638, 125, 102, 8907, 8761, 8615, 8861, 9176, 9053, 9076, 8884, 9282, 8592, 9090, 9345, 9013, 9299, 9153, 9259, 6551, 8675, 8867, 8844, 8632, 9322, 8930, 9236, 8738, 8993, 8970, 8947, 8924, 8824, 9216, 9262, 8721, 8821, 8555, 9239, 8847, 128, 9113, 9096, 8658, 9050, 9159, 8572, 8618, 9222, 9199, 8532, 9073, 8987, 8595, 9136, 858, 9202, 9125, 114, 9102, 8604, 8727, 8896, 9225, 8833, 8933, 8641, 8664, 8996, 9188, 9165, 9142, 9119, 8973, 9311, 8581, 9079, 8558, 9056, 9248, 8750, 9271, 7891, 9334, 9162, 9185, 9062, 8621, 9016, 8959, 108, 8747, 8913, 8890, 9288, 9039, 8598, 8647, 1651, 9328, 9351, 8827, 8873, 8850, 7831, 8810, 8724, 9265, 131, 8936, 8830, 8853, 8999, 8976, 8876, 8953, 8561, 8661, 9245, 8584, 9268, 9145, 8624, 9205, 9059, 8601, 9099, 9291, 9122, 9228, 8730, 8538, 8644, 9036, 8870, 8667, 8916, 9308, 9208, 8813, 8578, 9331, 9082, 8541, 134, 9182, 9019, 9042, 8564, 8956, 9105, 111, 9285, 8893, 8979, 6546, 8819, 7843, 7943, 9217, 9294, 8627, 9194, 9317, 9025, 9088, 8988, 8902, 8879, 8856, 7837, 9048, 9071, 8919, 8965, 9111, 137, 8550, 8942, 100, 8859, 9005, 9154, 8613, 6552, 8567, 9108, 9008, 7900, 8882, 9274, 8590, 8982, 9131, 9257, 9234, 9211, 8733, 8756, 8670, 9297, 8842, 9171, 9320, 8607, 9148, 8630, 7940, 9085, 8544, 9091, 9068, 8922, 8945, 9045, 8899, 9022, 9168, 8753, 9214, 8676, 140, 9337, 8653, 9237, 8570, 9251, 8816, 9314, 117, 8530, 8836, 9028, 8985, 8759, 8736, 9300, 9254, 8962, 9174, 9151, 120, 8633, 8839, 8939, 9231, 8925, 8547, 9065, 9002, 8610, 6549, 8862, 9340, 9128, 8673, 8650, 8587, 9191, 9277, 8719, 8573, 106, 8619, 8911, 9180, 9286, 8596, 8888, 9280, 6555, 859, 9094, 8825, 9263, 8871, 9303, 9157, 8656, 8848, 9240, 8636, 9326, 129, 9134, 8928, 123, 8828, 8951, 8974, 8905, 9031, 9266, 9343, 9100, 7892, 8725, 9243, 8739, 9140, 9117, 9203, 8576, 8662, 8865, 9054, 8536, 9077, 8599, 8991, 9137, 9114, 9014, 8968, 9260, 9160, 9306, 8868, 8845, 8553, 9037, 8639, 8593, 8808, 126, 109, 8954, 8762, 8616, 9197, 8891, 8722, 9220, 9177, 9283, 9120, 9346, 9097, 9051, 8659, 8533, 9223, 9200, 8931, 9074, 9323, 103, 8994, 8971, 8948, 8908, 9011, 9057, 8822, 8556, 7889, 8579, 9183, 8642, 8885, 9034, 9003, 8857, 8957, 8565, 8811, 8665, 9080, 9149, 9272, 7898, 8980, 9209, 9017, 6547, 9063, 8605, 9103, 9126, 9295, 8628, 8648, 9040, 8934, 9232, 8542, 8851, 8897, 8997, 8874, 8920, 9312, 7941, 8582, 8559, 138, 9123, 9086, 9335, 9186, 9163, 9023, 8622, 9249, 8960, 115, 8748, 9289, 9226, 1652, 8834, 9352, 9252, 9106, 9060, 9206, 8937, 8608, 8539, 8645, 8731, 9229, 9329, 132, 8837, 8545, 9000, 8754, 8562, 8668, 8914, 7938, 9146, 9169, 8977, 8585, 9083, 9020, 9043, 9066, 9189, 9166, 9143, 112, 8602, 8625, 9315, 9292, 8751, 8894, 8854, 8877, 8831, 7835, 9309, 8917, 8814, 9269, 9246, 8728, 8940, 9332, 135, 8949, 8926, 8903, 8757, 8880, 9072, 8611, 9049, 8657, 9172, 9341, 8588, 8574, 9255, 9009, 9032, 8820, 9318, 121, 8989, 8840, 9281, 9258, 9235, 9212, 8671, 8966, 499, 8817, 8843, 8943, 8551, 9178, 9092, 6553, 124, 9069, 9046, 9109, 8528, 8614, 9006, 9155, 8568, 9195, 9344, 8654, 9218, 8677, 7901, 8983, 8591, 9132, 9298, 6550, 9198, 8531, 118, 8631, 8823, 9321, 9029, 9129, 8737, 9115, 101, 8946, 8969, 8923, 8860, 8906, 9052, 9338, 141, 9275, 8883, 8594, 104, 8571, 8548, 9089, 9112, 8863, 8674, 8651, 9192, 9278, 9135, 8986, 8886, 8760, 8900, 9215, 9261, 8720, 9301, 8963, 9152, 9175, 9026, 9238, 8634, 9164, 9118, 9141, 9018, 8995, 8826, 8849, 9095, 8972, 8872, 9264, 9310, 8557, 9241, 8580, 7890, 9201, 8620, 8534, 9224, 8726, 9287, 8597, 1650, 9181, 860, 9204, 9350, 8809, 8663, 9304, 8763, 8866, 9055, 9078, 9227, 8537, 130, 8637, 9327, 8935, 8952, 8975, 8998, 9061, 9015, 8912, 107, 7893, 8889, 8560, 9101, 9038, 8623, 110, 9221, 8723, 8915, 7847, 8892, 9121, 8600, 8992, 8929, 9184, 9161, 7833, 8829, 9138, 8852, 9098, 8660, 9307, 8577, 9244, 9267, 8554, 133, 9075, 9330, 8640, 8617, 127, 8832, 8955, 9012, 9158, 8909, 9058, 9247, 9284, 9035, 8643, 9144, 9347, 8869, 8846, 8603, 8540, 8932, 9324, 9081]
    },
    {
      id: 344,
      name: 'Three-Way Ganging Connector',
      fileName: '42-9503.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9503.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [3279]
    },
    {
      id: 345,
      name: 'Tile Grommet Kit',
      fileName: '343-1101.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/allsteel/343-1101.pdf',
      seriesIdArray: [52],
      serialNumberIdArray: [],
      basemodelIdArray: [2248]
    },
    {
      id: 346,
      name: 'Two-Way Ganging Connector',
      fileName: '42-9502.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Seating/42-9502.pdf',
      seriesIdArray: [59],
      serialNumberIdArray: [],
      basemodelIdArray: [3278]
    },
    {
      id: 347,
      name: 'Upper Bookcase',
      fileName: '242-9666.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9666.pdf',
      seriesIdArray: [33],
      serialNumberIdArray: [],
      basemodelIdArray: [4194, 4192, 4195, 4190, 4193, 4191]
    },
    {
      id: 348,
      name: 'Veneer Panel Base Installation',
      fileName: '664-0356.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/664-0356.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4098, 4104, 4096, 4113, 4105, 4114, 4097, 4103]
    },
    {
      id: 349,
      name: 'Vertical Paper Management Unit',
      fileName: '242-7437.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7437.pdf',
      seriesIdArray: [69, 16, 25, 60, 57, 17],
      serialNumberIdArray: [],
      basemodelIdArray: [2614]
    },
    {
      id: 350,
      name: 'Video/Personal/Storage Cabinet',
      fileName: '242-9663.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9663.pdf',
      seriesIdArray: [33, 57, 32],
      serialNumberIdArray: [],
      basemodelIdArray: [4184, 4144, 4185, 3164, 4143, 4186]
    },
    {
      id: 351,
      name: 'Wall Cabinet Installation',
      fileName: '242-7652.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7652.pdf',
      seriesIdArray: [57, 69, 38, 16],
      serialNumberIdArray: [],
      basemodelIdArray: [3220, 2928, 2845, 950, 1199, 3223, 2822, 2925, 2848, 2825, 3217, 2931, 2842, 2828, 2934, 2831, 2917, 2834, 2937, 948, 2943, 2837, 1194, 2923, 2926, 3215, 2940, 2840, 1197, 3218, 945, 2843, 2920, 2829, 3221, 2823, 2846, 1200, 3224, 2932, 951, 2849, 2826, 2929, 2921, 2935, 2915, 2838, 2941, 2918, 2832, 2938, 2835, 2821, 2844, 1201, 2927, 3213, 949, 2924, 3216, 2824, 2841, 1198, 946, 1195, 3219, 2936, 3222, 2916, 2847, 2933, 2830, 2833, 2827, 2930, 2836, 947, 2922, 2942, 3214, 2839, 944, 2939, 2919, 1196]
    },
    {
      id: 352,
      name: 'Wall Cabinet Installation',
      fileName: '242-9667.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9667.pdf',
      seriesIdArray: [32],
      serialNumberIdArray: [],
      basemodelIdArray: [4152, 4155, 4153, 4154]
    },
    {
      id: 353,
      name: 'Wall Cabinet Installation',
      fileName: '242-9797.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9797.pdf',
      seriesIdArray: [46],
      serialNumberIdArray: [],
      basemodelIdArray: [3248, 3249]
    },
    {
      id: 354,
      name: 'Wall Cabinet Installation',
      fileName: '664-0018.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/664-0018.pdf',
      seriesIdArray: [69, 16, 57, 60],
      serialNumberIdArray: [],
      basemodelIdArray: [1263, 3158, 4106, 1047, 1262]
    },
    {
      id: 355,
      name: 'Wall Connector',
      fileName: '143-0202.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/143-0202.pdf',
      seriesIdArray: [70],
      serialNumberIdArray: [],
      basemodelIdArray: [1699]
    },
    {
      id: 356,
      name: 'Wall Mount Open Shelf',
      fileName: '56-0470.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0470.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [942, 941]
    },
    {
      id: 357,
      name: 'Wall Rail System Installation',
      fileName: '143-1001.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Education/143-1001.pdf',
      seriesIdArray: [63, 41],
      serialNumberIdArray: [],
      basemodelIdArray: [2618, 2621, 2619, 2616, 2622, 2620, 2617]
    },
    {
      id: 358,
      name: 'Wall Unit Installation',
      fileName: '242-7651.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7651.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [2954, 3014, 2963, 3021, 2953, 3013, 2962, 3022]
    },
    {
      id: 359,
      name: 'Wardrobe/Storage Cabinet',
      fileName: '242-7293.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-7293.pdf',
      seriesIdArray: [16, 17, 69],
      serialNumberIdArray: [],
      basemodelIdArray: [1080, 900, 1175, 1081, 901, 1176, 899, 1177]
    },
    {
      id: 360,
      name: 'Warning Label',
      fileName: '42-5369.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Warning%20Labels/42-5369.pdf',
      seriesIdArray: [45],
      serialNumberIdArray: [],
      basemodelIdArray: [1390]
    },
    {
      id: 361,
      name: 'Warning Label',
      fileName: '56-0085.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Preside/56-0085.pdf',
      seriesIdArray: [60],
      serialNumberIdArray: [],
      basemodelIdArray: [4068, 4065, 4062, 4091, 4071, 4094, 4060, 4063, 4092, 4089, 4066, 4069, 4061, 4064, 4067, 4090, 4093, 4070]
    },
    {
      id: 362,
      name: 'Warning Label',
      fileName: '242-7490.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Warning%20Labels/242-7490.pdf',
      seriesIdArray: [16],
      serialNumberIdArray: [],
      basemodelIdArray: [935]
    },
    {
      id: 363,
      name: 'Whiteboard Installation',
      fileName: '664-1206.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Motivate/664-1206.pdf',
      seriesIdArray: [53],
      serialNumberIdArray: [],
      basemodelIdArray: [2685, 2686]
    },
    {
      id: 364,
      name: 'Wire Management Clip',
      fileName: '242-9831.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/VOI/242-9831.pdf',
      seriesIdArray: [71],
      serialNumberIdArray: [],
      basemodelIdArray: [4392, 4393]
    },
    {
      id: 365,
      name: 'Wire Management Installation',
      fileName: '242-9143.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/242-9143.pdf',
      seriesIdArray: [34, 47],
      serialNumberIdArray: [],
      basemodelIdArray: [4889, 4890, 4888, 4891]
    },
    {
      id: 366,
      name: 'Worksurface Bracket',
      fileName: '42-0010.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-0010.pdf',
      seriesIdArray: [42],
      serialNumberIdArray: [],
      basemodelIdArray: [4036]
    },
    {
      id: 367,
      name: 'Worksurface Leg Installation',
      fileName: '143-1600.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1600.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2661, 2659]
    },
    {
      id: 368,
      name: 'Worksurface Support/End Panel',
      fileName: '56-0640.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Wood%20Case%20Goods%20and%20Tables/56-0640.pdf',
      seriesIdArray: [38],
      serialNumberIdArray: [],
      basemodelIdArray: [3066, 3060, 3063, 3069, 3058, 3055, 3064, 3070, 3056, 3059, 3065, 3057]
    },
    {
      id: 369,
      name: 'Worksurface Supported Pedestal',
      fileName: '42-2328.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Metal%20Case%20Goods/42-2328.pdf',
      seriesIdArray: [36, 39, 68, 42],
      serialNumberIdArray: [],
      basemodelIdArray: [3960, 1324, 3943, 3920, 1301, 3923, 3946, 1298, 3863, 3940, 3866, 1310, 3926, 3949, 4118, 3952, 3929, 1330, 1307, 1327, 1304, 3932, 3869, 3935, 3958, 3941, 3918, 3938, 3915, 3961, 1296, 3955, 3927, 1325, 1302, 3921, 3944, 3864, 1299, 3947, 3924, 1305, 3950, 4119, 3867, 1311, 1308, 3930, 3953, 3933, 3956, 1328, 3942, 3919, 1300, 3936, 3959, 3922, 3916, 3939, 1297, 1326, 1303, 4117, 1323, 3928, 3951, 3865, 1306, 1329, 3862, 3945, 3925, 3948, 3868, 1295, 3934, 3957, 1309, 3931, 3954, 3937, 3914, 3917, 1312, 4120]
    },
    {
      id: 370,
      name: 'Worksurface Supports',
      fileName: '42-2248.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/Systems/42-2248.pdf',
      seriesIdArray: [27, 68],
      serialNumberIdArray: [],
      basemodelIdArray: [4820, 4843, 4866, 5012, 4989, 4966, 4697, 4943, 4674, 1826, 1780, 4236, 4259, 4451, 4528, 4551, 4428, 4222, 4720, 5112, 1803, 4322, 4299, 1743, 4445, 4491, 4637, 4405, 4903, 4382, 4574, 5072, 5095, 5052, 1720, 4468, 1763, 4860, 4488, 4388, 4780, 4929, 5029, 1786, 4883, 4216, 4906, 4757, 4365, 4614, 4465, 5006, 1760, 4654, 4677, 4631, 4992, 4694, 4740, 4591, 4239, 4262, 4717, 4803, 4325, 4302, 4279, 4448, 4571, 5069, 4594, 4402, 4969, 5092, 1723, 4863, 4471, 4763, 4986, 5009, 4700, 4531, 4777, 4385, 4840, 5032, 1783, 4617, 4425, 4923, 4946, 5115, 4554, 4362, 4319, 1806, 4511, 4534, 4680, 5075, 1740, 4242, 4634, 4737, 4949, 4926, 4408, 4508, 5049, 1766, 4657, 4345, 4823, 4800, 4846, 4886, 4783, 4548, 5089, 4282, 4305, 4909, 4368, 4611, 4219, 4760, 5081, 5058, 5035, 4743, 4789, 4935, 4620, 4643, 1795, 1772, 4520, 4414, 4912, 4812, 5104, 4228, 4245, 4351, 4683, 4875, 4829, 4437, 4291, 4597, 4660, 4374, 4766, 4852, 4958, 4268, 4749, 4726, 4703, 4208, 4872, 4826, 4434, 4998, 4285, 4975, 4308, 5118, 4600, 4849, 4457, 4514, 1809, 4583, 4560, 5038, 5124, 1729, 5078, 4537, 4952, 4497, 4474, 4646, 1769, 4623, 4411, 5015, 5101, 4417, 4394, 4371, 4225, 4348, 4494, 1792, 4248, 4640, 4540, 4686, 4832, 1746, 5061, 1815, 4663, 4271, 4955, 4563, 5055, 4915, 4892, 4746, 4769, 4723, 4577, 4978, 4786, 4288, 4311, 4354, 4809, 4557, 4580, 4603, 4895, 1732, 5121, 4500, 5041, 4477, 5018, 4706, 5098, 4265, 4806, 4869, 4792, 1789, 4729, 4391, 4932, 4666, 1749, 1726, 4995, 4431, 4972, 4454, 4517, 1812, 5027, 4835, 4881, 5127, 4981, 4214, 4383, 4506, 5004, 4420, 1758, 4314, 4712, 4612, 4629, 4606, 4652, 4798, 4589, 4543, 4397, 4483, 4735, 1735, 5021, 4237, 5044, 4566, 5064, 4460, 4758, 4300, 4841, 4254, 4277, 4818, 4795, 4231, 4772, 5087, 4695, 1778, 4357, 4569, 4692, 4669, 4898, 1801, 5110, 4944, 4921, 4529, 4443, 4984, 5070, 4380, 4403, 5007, 4466, 4709, 4317, 4858, 1761, 1738, 4632, 4732, 4778, 4586, 4486, 4294, 4440, 4855, 5047, 5024, 4924, 4755, 4463, 4961, 4938, 5084, 5130, 4523, 4546, 4715, 4503, 4480, 1775, 1798, 4672, 1755, 5001, 4609, 5107, 4217, 4964, 4987, 4918, 4941, 4626, 4649, 4400, 4446, 5090, 4377, 4549, 4526, 5067, 4257, 4861, 4320, 4251, 4297, 4274, 4752, 4775, 4838, 4234, 1781, 4689, 4878, 4360, 4901, 4423, 4211, 1718, 4815, 5073, 4406, 4904, 4973, 1727, 4598, 5096, 4283, 4306, 4575, 4804, 1764, 4512, 4844, 4535, 4867, 5036, 4675, 5013, 4990, 4821, 4781, 1787, 4389, 4927, 4429, 4950, 4260, 5119, 4452, 1810, 4366, 4323, 1744, 4741, 4592, 4638, 4426, 4449, 1721, 4412, 4718, 4953, 5053, 4661, 4349, 4967, 4827, 4489, 5030, 5093, 4286, 4552, 4223, 4764, 4615, 4678, 4701, 4655, 4847, 4824, 4724, 4870, 4578, 4386, 4532, 1784, 4263, 4240, 4432, 4947, 5116, 4363, 4555, 1807, 4326, 4303, 4280, 5076, 4495, 4930, 4884, 4738, 4970, 1724, 4993, 1747, 5099, 1767, 4472, 4801, 4409, 4864, 4515, 5056, 4907, 4346, 5010, 4369, 5033, 4887, 1790, 4492, 4784, 4761, 4641, 4618, 4910, 4469, 4220, 4721, 4698, 4744, 1741, 4681, 4635, 4243, 4595, 4572, 5113, 5050, 1804, 4266, 4509, 4658, 4807, 4252, 4229, 4352, 4398, 4544, 4690, 1750, 4667, 4498, 4996, 4475, 5065, 4767, 4375, 4959, 4773, 4750, 4558, 4727, 5059, 4581, 4704, 4896, 4919, 4790, 4836, 4644, 4621, 4813, 4315, 4607, 4584, 4684, 4246, 4787, 5125, 4292, 4538, 4833, 5079, 5022, 1770, 1793, 4269, 5102, 4561, 4810, 4710, 4418, 4395, 4372, 4913, 4435, 4873, 4481, 4936, 4309, 4976, 4999, 4521, 4850, 5062, 4458, 1753, 4939, 4916, 4770, 4793, 4893, 4747, 5039, 1730, 5085, 4524, 4355, 1776, 4455, 4647, 4624, 5016, 4249, 4232, 5122, 4687, 4295, 4856, 4378, 4601, 4209, 4707, 4272, 4664, 4933, 4730, 4876, 4438, 4830, 4979, 4312, 4518, 1756, 1813, 4753, 4853, 4461, 5002, 5105, 5082, 4226, 4604, 4627, 4541, 4289, 1733, 1773, 5019, 4478, 4501, 5042, 1796, 4564, 4415, 4956, 4275, 4321, 4298, 4590, 1742, 4444, 4344, 4490, 4736, 5051, 1719, 4567, 4859, 4467, 4759, 4942, 4965, 4696, 5028, 1779, 5088, 1825, 4982, 4358, 4527, 4550, 4613, 5111, 4719, 4421, 4507, 1802, 5005, 1759, 4653, 4630, 4676, 4968, 4530, 4922, 1736, 4381, 5045, 5071, 4238, 4261, 4504, 4404, 4945, 4802, 4278, 4301, 4842, 4819, 4255, 4796, 4779, 4733, 4882, 4215, 4693, 4670, 1722, 4427, 4364, 4756, 4905, 4985, 4962, 4885, 4839, 5031, 5131, 4547, 4739, 4716, 1799, 4424, 4816, 5108, 4510, 5008, 4318, 4218, 4441, 1762, 4656, 1739, 4633, 4487, 4570, 4593, 5048, 4401, 5068, 5091, 4899, 4464, 4776, 4799, 4822, 4281, 4484, 4235, 5025, 1782, 4879, 4902, 5114, 4573, 4212, 4361, 4610, 1805, 4988, 4650, 4673, 4447, 4587, 5128, 4713, 4407, 4384, 4925, 4948, 4862, 4258, 4536, 4559, 4828, 4782, 1788, 4682, 4244, 4390, 4636, 4951, 4928, 5120, 4851, 4367, 1811, 4659, 4267, 4934, 4742, 5080, 4997, 4974, 1728, 4284, 4307, 4476, 1771, 4221, 4911, 4805, 4413, 4914, 4373, 5037, 4350, 5014, 4991, 4496, 5094, 4622, 4473, 4553, 4224, 4765, 4702, 1785, 4725, 4324, 4865, 4387, 4247, 4788, 4639, 4685, 5117, 4450, 4576, 1745, 4599, 4662, 4513, 5054, 1808, 5077, 4931, 4287, 4310, 4602, 5100, 1768, 4410, 4616, 4516, 4908, 4808, 4370, 4347, 4679, 4871, 4848, 1791, 4825, 4433, 4539, 4241, 4785, 4264, 4762, 4456, 5017, 4954, 4868, 4227, 4699, 4745, 4304, 4722, 4845, 4453, 4430, 4596, 1725, 4971, 4994, 1748, 5034, 5057, 5011, 4493, 4579, 5074, 4533, 4831, 4619, 4642, 4768, 4470, 4556, 5097, 1765, 4705, 4797, 4774, 4582, 4751, 4605, 4728, 4628, 4651, 4920, 4874, 4436, 4482, 4290, 1734, 4359, 5043, 5020, 4459, 4276, 4253, 5126, 4880, 4668, 4691, 1794, 4499, 4519, 4213, 4711, 5103, 4442, 4419, 4396, 4937, 5060, 4983, 4734, 4545, 4522, 4645, 5063, 4316, 4857, 4608, 1737, 4207, 4748, 4230, 4771, 4293, 5086, 1777, 4834, 5046, 5023, 1800, 4356, 4270, 4897, 4505, 4568, 5109, 4960, 4811, 4256, 5123, 4233, 4977, 5000, 4379, 4479, 4502, 4671, 4210, 4708, 1754, 4900, 4794, 4817, 4625, 5040, 4731, 1731, 4585, 4648, 4754, 1814, 4562, 5129, 5106, 5083, 4250, 4273, 1717, 4542, 4791, 4837, 4296, 4688, 4588, 4714, 1797, 1774, 4665, 4353, 4957, 4565, 4422, 4814, 4416, 4963, 4940, 4917, 4894, 4399, 4877, 4485, 5026, 4439, 4980, 4525, 5066, 4376, 4462, 4313, 4854, 5003, 1757]
    },
    {
      id: 371,
      name: 'Workwall with File Center',
      fileName: '143-1140.pdf',
      url: 'https://hniinstallsheets.blob.core.windows.net/documents/basyx/143-1140.pdf',
      seriesIdArray: [35],
      serialNumberIdArray: [],
      basemodelIdArray: [2664]
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
