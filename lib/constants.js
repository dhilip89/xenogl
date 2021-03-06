"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMEOUT_IGNORED = -1;
exports.ZERO = 0;
exports.NO_ERROR = 0;
exports.NONE = 0;
exports.ONE = 1;
exports.POINTS = 0x0000;
exports.SYNC_FLUSH_COMMANDS_BIT = 0x00000001;
exports.DEPTH_BUFFER_BIT = 0x00000100;
exports.STENCIL_BUFFER_BIT = 0x00000400;
exports.COLOR_BUFFER_BIT = 0x00004000;
exports.LINES = 0x0001;
exports.LINE_LOOP = 0x0002;
exports.LINE_STRIP = 0x0003;
exports.TRIANGLES = 0x0004;
exports.TRIANGLE_STRIP = 0x0005;
exports.TRIANGLE_FAN = 0x0006;
exports.NEVER = 0x0200;
exports.LESS = 0x0201;
exports.EQUAL = 0x0202;
exports.LEQUAL = 0x0203;
exports.GREATER = 0x0204;
exports.NOTEQUAL = 0x0205;
exports.GEQUAL = 0x0206;
exports.ALWAYS = 0x0207;
exports.SRC_COLOR = 0x0300;
exports.ONE_MINUS_SRC_COLOR = 0x0301;
exports.SRC_ALPHA = 0x0302;
exports.ONE_MINUS_SRC_ALPHA = 0x0303;
exports.DST_ALPHA = 0x0304;
exports.ONE_MINUS_DST_ALPHA = 0x0305;
exports.DST_COLOR = 0x0306;
exports.ONE_MINUS_DST_COLOR = 0x0307;
exports.SRC_ALPHA_SATURATE = 0x0308;
exports.FRONT = 0x0404;
exports.BACK = 0x0405;
exports.FRONT_AND_BACK = 0x0408;
exports.INVALID_ENUM = 0x0500;
exports.INVALID_VALUE = 0x0501;
exports.INVALID_OPERATION = 0x0502;
exports.OUT_OF_MEMORY = 0x0505;
exports.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
exports.CW = 0x0900;
exports.CCW = 0x0901;
exports.LINE_WIDTH = 0x0B21;
exports.CULL_FACE = 0x0B44;
exports.CULL_FACE_MODE = 0x0B45;
exports.FRONT_FACE = 0x0B46;
exports.DEPTH_RANGE = 0x0B70;
exports.DEPTH_TEST = 0x0B71;
exports.DEPTH_WRITEMASK = 0x0B72;
exports.DEPTH_CLEAR_VALUE = 0x0B73;
exports.DEPTH_FUNC = 0x0B74;
exports.STENCIL_TEST = 0x0B90;
exports.STENCIL_CLEAR_VALUE = 0x0B91;
exports.STENCIL_FUNC = 0x0B92;
exports.STENCIL_VALUE_MASK = 0x0B93;
exports.STENCIL_FAIL = 0x0B94;
exports.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
exports.STENCIL_PASS_DEPTH_PASS = 0x0B96;
exports.STENCIL_REF = 0x0B97;
exports.STENCIL_WRITEMASK = 0x0B98;
exports.VIEWPORT = 0x0BA2;
exports.DITHER = 0x0BD0;
exports.BLEND = 0x0BE2;
exports.READ_BUFFER = 0x0C02;
exports.SCISSOR_BOX = 0x0C10;
exports.SCISSOR_TEST = 0x0C11;
exports.COLOR_CLEAR_VALUE = 0x0C22;
exports.COLOR_WRITEMASK = 0x0C23;
exports.UNPACK_ROW_LENGTH = 0x0CF2;
exports.UNPACK_SKIP_ROWS = 0x0CF3;
exports.UNPACK_SKIP_PIXELS = 0x0CF4;
exports.UNPACK_ALIGNMENT = 0x0CF5;
exports.PACK_ROW_LENGTH = 0x0D02;
exports.PACK_SKIP_ROWS = 0x0D03;
exports.PACK_SKIP_PIXELS = 0x0D04;
exports.PACK_ALIGNMENT = 0x0D05;
exports.MAX_TEXTURE_SIZE = 0x0D33;
exports.MAX_VIEWPORT_DIMS = 0x0D3A;
exports.SUBPIXEL_BITS = 0x0D50;
exports.RED_BITS = 0x0D52;
exports.GREEN_BITS = 0x0D53;
exports.BLUE_BITS = 0x0D54;
exports.ALPHA_BITS = 0x0D55;
exports.DEPTH_BITS = 0x0D56;
exports.STENCIL_BITS = 0x0D57;
exports.TEXTURE_2D = 0x0DE1;
exports.DONT_CARE = 0x1100;
exports.FASTEST = 0x1101;
exports.NICEST = 0x1102;
exports.BYTE = 0x1400;
exports.UNSIGNED_BYTE = 0x1401;
exports.SHORT = 0x1402;
exports.UNSIGNED_SHORT = 0x1403;
exports.INT = 0x1404;
exports.UNSIGNED_INT = 0x1405;
exports.FLOAT = 0x1406;
exports.HALF_FLOAT = 0x140B;
exports.INVERT = 0x150A;
exports.TEXTURE = 0x1702;
exports.COLOR = 0x1800;
exports.DEPTH = 0x1801;
exports.STENCIL = 0x1802;
exports.STENCIL_INDEX = 0x1901;
exports.DEPTH_COMPONENT = 0x1902;
exports.RED = 0x1903;
exports.ALPHA = 0x1906;
exports.RGB = 0x1907;
exports.RGBA = 0x1908;
exports.LUMINANCE = 0x1909;
exports.LUMINANCE_ALPHA = 0x190A;
exports.KEEP = 0x1E00;
exports.REPLACE = 0x1E01;
exports.INCR = 0x1E02;
exports.DECR = 0x1E03;
exports.VENDOR = 0x1F00;
exports.RENDERER = 0x1F01;
exports.VERSION = 0x1F02;
exports.NEAREST = 0x2600;
exports.LINEAR = 0x2601;
exports.NEAREST_MIPMAP_NEAREST = 0x2700;
exports.LINEAR_MIPMAP_NEAREST = 0x2701;
exports.NEAREST_MIPMAP_LINEAR = 0x2702;
exports.LINEAR_MIPMAP_LINEAR = 0x2703;
exports.TEXTURE_MAG_FILTER = 0x2800;
exports.TEXTURE_MIN_FILTER = 0x2801;
exports.TEXTURE_WRAP_S = 0x2802;
exports.TEXTURE_WRAP_T = 0x2803;
exports.REPEAT = 0x2901;
exports.POLYGON_OFFSET_UNITS = 0x2A00;
exports.CONSTANT_COLOR = 0x8001;
exports.ONE_MINUS_CONSTANT_COLOR = 0x8002;
exports.CONSTANT_ALPHA = 0x8003;
exports.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
exports.BLEND_COLOR = 0x8005;
exports.FUNC_ADD = 0x8006;
exports.MIN = 0x8007;
exports.MAX = 0x8008;
exports.BLEND_EQUATION = 0x8009;
exports.BLEND_EQUATION_RGB = 0x8009;
exports.FUNC_SUBSTRACT = 0x800A;
exports.FUNC_REVERSE_SUBTRACT = 0x800B;
exports.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
exports.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
exports.POLYGON_OFFSET_FILL = 0x8037;
exports.POLYGON_OFFSET_FACTOR = 0x8038;
exports.RGB8 = 0x8051;
exports.RGBA4 = 0x8056;
exports.RGB5_A1 = 0x8057;
exports.RGBA8 = 0x8058;
exports.RGB10_A2 = 0x8059;
exports.TEXTURE_BINDING_2D = 0x8069;
exports.TEXTURE_BINDING_3D = 0x806A;
exports.UNPACK_SKIP_IMAGES = 0x806D;
exports.UNPACK_IMAGE_HEIGHT = 0x806E;
exports.TEXTURE_3D = 0x806F;
exports.TEXTURE_WRAP_R = 0x8072;
exports.MAX_3D_TEXTURE_SIZE = 0x8073;
exports.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
exports.SAMPLE_COVERAGE = 0x80A0;
exports.SAMPLE_BUFFERS = 0x80A8;
exports.SAMPLES = 0x80A9;
exports.SAMPLE_COVERAGE_VALUE = 0x80AA;
exports.SAMPLE_COVERAGE_INVERT = 0x80AB;
exports.BLEND_DST_RGB = 0x80C8;
exports.BLEND_SRC_RGB = 0x80C9;
exports.BLEND_DST_ALPHA = 0x80CA;
exports.BLEND_SRC_ALPHA = 0x80CB;
exports.MAX_ELEMENTS_VERTICES = 0x80E8;
exports.MAX_ELEMENTS_INDICES = 0x80E9;
exports.CLAMP_TO_EDGE = 0x812F;
exports.TEXTURE_MIN_LOD = 0x813A;
exports.TEXTURE_MAX_LOD = 0x813B;
exports.TEXTURE_BASE_LEVEL = 0x813C;
exports.TEXTURE_MAX_LEVEL = 0x813D;
exports.GENERATE_MIPMAP_HINT = 0x8192;
exports.DEPTH_COMPONENT16 = 0x81A5;
exports.DEPTH_COMPONENT24 = 0x81A6;
exports.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
exports.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
exports.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
exports.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
exports.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
exports.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
exports.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
exports.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
exports.FRAMEBUFFER_DEFAULT = 0x8218;
exports.DEPTH_STENCIL_ATTACHMENT = 0x821A;
exports.RG = 0x8227;
exports.RG_INTEGER = 0x8228;
exports.R8 = 0x8229;
exports.RG8 = 0x822B;
exports.R16F = 0x822D;
exports.R32F = 0x822E;
exports.RG16F = 0x822F;
exports.RG32F = 0x8230;
exports.R8I = 0x8231;
exports.R8UI = 0x8232;
exports.R16I = 0x8233;
exports.R16UI = 0x8234;
exports.R32I = 0x8235;
exports.R32UI = 0x8236;
exports.RG8I = 0x8237;
exports.RG8UI = 0x8238;
exports.RG16I = 0x8239;
exports.RG16UI = 0x823A;
exports.RG32I = 0x823B;
exports.RG32UI = 0x823C;
exports.TEXTURE_IMMUTABLE_LEVELS = 0x82DF;
exports.UNSIGNED_SHORT_5_6_5 = 0x8363;
exports.UNSIGNED_INT_2_10_10_10_REV = 0x8368;
exports.MIRRORED_REPEAT = 0x8370;
exports.ALIASED_POINT_SIZE_RANGE = 0x846D;
exports.ALIASED_LINE_WIDTH_RANGE = 0x846E;
exports.TEXTURE0 = 0x84C0;
exports.TEXTURE1 = 0x84C1;
exports.TEXTURE2 = 0x84C2;
exports.TEXTURE3 = 0x84C3;
exports.TEXTURE4 = 0x84C4;
exports.TEXTURE5 = 0x84C5;
exports.TEXTURE6 = 0x84C6;
exports.TEXTURE7 = 0x84C7;
exports.TEXTURE8 = 0x84C8;
exports.TEXTURE9 = 0x84C9;
exports.TEXTURE10 = 0x84CA;
exports.TEXTURE11 = 0x84CB;
exports.TEXTURE12 = 0x84CC;
exports.TEXTURE13 = 0x84CD;
exports.TEXTURE14 = 0x84CE;
exports.TEXTURE15 = 0x84CF;
exports.TEXTURE16 = 0x84D0;
exports.TEXTURE17 = 0x84D1;
exports.TEXTURE18 = 0x84D2;
exports.TEXTURE19 = 0x84D3;
exports.TEXTURE20 = 0x84D4;
exports.TEXTURE21 = 0x84D5;
exports.TEXTURE22 = 0x84D6;
exports.TEXTURE23 = 0x84D7;
exports.TEXTURE24 = 0x84D8;
exports.TEXTURE25 = 0x84D9;
exports.TEXTURE26 = 0x84DA;
exports.TEXTURE27 = 0x84DB;
exports.TEXTURE28 = 0x84DC;
exports.TEXTURE29 = 0x84DD;
exports.TEXTURE30 = 0x84DE;
exports.TEXTURE31 = 0x84CF;
exports.ACTIVE_TEXTURE = 0x84E0;
exports.MAX_RENDERBUFFER_SIZE = 0x84E8;
exports.DEPTH_STENCIL = 0x84F9;
exports.UNSIGNED_INT_24_8 = 0x84FA;
exports.MAX_TEXTURE_LOD_BIAS = 0x84FD;
exports.INCR_WRAP = 0x8507;
exports.DECR_WRAP = 0x8508;
exports.TEXTURE_CUBE_MAP = 0x8513;
exports.TEXTURE_BINDING_CUBE_MAP = 0x8514;
exports.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
exports.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
exports.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
exports.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
exports.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
exports.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
exports.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
exports.VERTEX_ARRAY_BINDING = 0x85B5;
exports.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
exports.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
exports.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
exports.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
exports.CURRENT_VERTEX_ATTRIB = 0x8626;
exports.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
exports.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
exports.BUFFER_SIZE = 0x8764;
exports.BUFFER_USAGE = 0x8765;
exports.STENCIL_BACK_FUNC = 0x8800;
exports.STENCIL_BACK_FAIL = 0x8801;
exports.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
exports.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
exports.RGBA32F = 0x8814;
exports.RGB32F = 0x8815;
exports.RGBA16F = 0x881A;
exports.RGB16F = 0x881B;
exports.MAX_DRAW_BUFFERS = 0x8824;
exports.DRAW_BUFFER0 = 0x8825;
exports.DRAW_BUFFER1 = 0x8826;
exports.DRAW_BUFFER2 = 0x8827;
exports.DRAW_BUFFER3 = 0x8828;
exports.DRAW_BUFFER4 = 0x8829;
exports.DRAW_BUFFER5 = 0x882A;
exports.DRAW_BUFFER6 = 0x882B;
exports.DRAW_BUFFER7 = 0x882C;
exports.DRAW_BUFFER8 = 0x882D;
exports.DRAW_BUFFER9 = 0x882E;
exports.DRAW_BUFFER10 = 0x882F;
exports.DRAW_BUFFER11 = 0x8830;
exports.DRAW_BUFFER12 = 0x8831;
exports.DRAW_BUFFER13 = 0x8832;
exports.DRAW_BUFFER14 = 0x8833;
exports.DRAW_BUFFER15 = 0x8834;
exports.BLEND_EQUATION_ALPHA = 0x883D;
exports.TEXTURE_COMPARE_MODE = 0x884C;
exports.TEXTURE_COMPARE_FUNC = 0x884D;
exports.COMPARE_REF_TO_TEXTURE = 0x884E;
exports.CURRENT_QUERY = 0x8865;
exports.QUERY_RESULT = 0x8866;
exports.QUERY_RESULT_AVAILABLE = 0x8867;
exports.MAX_VERTEX_ATTRIBS = 0x8869;
exports.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
exports.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
exports.ARRAY_BUFFER = 0x8892;
exports.ELEMENT_ARRAY_BUFFER = 0x8893;
exports.ARRAY_BUFFER_BINDING = 0x8894;
exports.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
exports.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
exports.STREAM_DRAW = 0x88E0;
exports.STREAM_READ = 0x88E1;
exports.STREAM_COPY = 0x88E2;
exports.STATIC_DRAW = 0x88E4;
exports.STATIC_READ = 0x88E5;
exports.STATIC_COPY = 0x88E6;
exports.DYNAMIC_DRAW = 0x88E8;
exports.DYNAMIC_READ = 0x88E9;
exports.DYNAMIC_COPY = 0x88EA;
exports.PIXEL_PACK_BUFFER = 0x88EB;
exports.PIXEL_UNPACK_BUFFER = 0x88EC;
exports.PIXEL_PACK_BUFFER_BINDING = 0x88ED;
exports.PIXEL_UNPACK_BUFFER_BINDING = 0x88EF;
exports.DEPTH24_STENCIL8 = 0x88F0;
exports.VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD;
exports.VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE;
exports.MAX_ARRAY_TEXTURE_LAYERS = 0x88FF;
exports.MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
exports.MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
exports.SAMPLER_BINDING = 0x8919;
exports.UNIFORM_BUFFER = 0x8A11;
exports.UNIFORM_BUFFER_BINDING = 0x8A28;
exports.UNIFORM_BUFFER_START = 0x8A29;
exports.UNIFORM_BUFFER_SIZE = 0x8A2A;
exports.MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B;
exports.MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D;
exports.MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E;
exports.MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F;
exports.MAX_UNIFORM_BLOCK_SIZE = 0x8A30;
exports.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31;
exports.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33;
exports.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34;
exports.ACTIVE_UNIFORM_BLOCKS = 0x8A36;
exports.UNIFORM_TYPE = 0x8A37;
exports.UNIFORM_SIZE = 0x8A38;
exports.UNIFORM_BLOCK_INDEX = 0x8A3A;
exports.UNIFORM_OFFSET = 0x8A3B;
exports.UNIFORM_ARRAY_STRIDE = 0x8A3C;
exports.UNIFORM_MATRIX_STRIDE = 0x8A3D;
exports.UNIFORM_IS_ROW_MAJOR = 0x8A3E;
exports.UNIFORM_BLOCK_BINDING = 0x8A3F;
exports.UNIFORM_BLOCK_DATA_SIZE = 0x8A40;
exports.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42;
exports.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43;
exports.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44;
exports.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46;
exports.FRAGMENT_SHADER = 0x8B30;
exports.VERTEX_SHADER = 0x8B31;
exports.MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49;
exports.MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A;
exports.MAX_VARYING_COMPONENTS = 0x8B4B;
exports.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
exports.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
exports.SHADER_TYPE = 0x8B4F;
exports.FLOAT_VEC2 = 0x8B50;
exports.FLOAT_VEC3 = 0x8B51;
exports.FLOAT_VEC4 = 0x8B52;
exports.INT_VEC2 = 0x8B53;
exports.INT_VEC3 = 0x8B54;
exports.INT_VEC4 = 0x8B55;
exports.BOOL = 0x8B56;
exports.BOOL_VEC2 = 0x8B57;
exports.BOOL_VEC3 = 0x8B58;
exports.BOOL_VEC4 = 0x8B59;
exports.FLOAT_MAT2 = 0x8B5A;
exports.FLOAT_MAT3 = 0x8B5B;
exports.FLOAT_MAT4 = 0x8B5C;
exports.SAMPLER_2D = 0x8B5E;
exports.SAMPLER_3D = 0x8B5F;
exports.SAMPLER_CUBE = 0x8B60;
exports.SAMPLER_2D_SHADOW = 0x8B62;
exports.FLOAT_MAT2x3 = 0x8B65;
exports.FLOAT_MAT2x4 = 0x8B66;
exports.FLOAT_MAT3x2 = 0x8B67;
exports.FLOAT_MAT3x4 = 0x8B68;
exports.FLOAT_MAT4x2 = 0x8B69;
exports.FLOAT_MAT4x3 = 0x8B6A;
exports.DELETE_STATUS = 0x8B80;
exports.COMPILE_STATUS = 0x8B81;
exports.LINK_STATUS = 0x8B82;
exports.VALIDATE_STATUS = 0x8B83;
exports.ATTACHED_SHADERS = 0x8B85;
exports.ACTIVE_UNIFORMS = 0x8B86;
exports.ACTIVE_ATTRIBUTES = 0x8B89;
exports.FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B;
exports.SHADING_LANGUAGE_VERSION = 0x8B8C;
exports.CURRENT_PROGRAM = 0x8B8D;
exports.IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
exports.IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
exports.UNSIGNED_NORMALIZED = 0x8C17;
exports.TEXTURE_2D_ARRAY = 0x8C1A;
exports.TEXTURE_BINDING_2D_ARRAY = 0x8C1D;
exports.ANY_SAMPLES_PASSED = 0x8C2F;
exports.R11F_G11F_B10F = 0x8C3A;
exports.UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
exports.RGB9_E5 = 0x8C3D;
exports.UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
exports.SRGB = 0x8C40;
exports.SRGB8 = 0x8C41;
exports.SRGB8_ALPHA8 = 0x8C43;
exports.TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F;
exports.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80;
exports.TRANSFORM_FEEDBACK_VARYINGS = 0x8C83;
exports.TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84;
exports.TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85;
exports.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88;
exports.RASTERIZER_DISCARD = 0x8C89;
exports.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
exports.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B;
exports.INTERLEAVED_ATTRIBS = 0x8C8C;
exports.SEPARATE_ATTRIBS = 0x8C8D;
exports.TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
exports.TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F;
exports.STENCIL_BACK_REF = 0x8CA3;
exports.STENCIL_BACK_VALUE_MASK = 0x8CA4;
exports.STENCIL_BACK_WRITEMASK = 0x8CA5;
exports.FRAMEBUFFER_BINDING = 0x8CA6;
exports.DRAW_FRAMEBUFFER_BINDING = 0x8CA6;
exports.RENDERBUFFER_BINDING = 0x8CA7;
exports.READ_FRAMEBUFFER = 0x8CA8;
exports.DRAW_FRAMEBUFFER = 0x8CA9;
exports.READ_FRAMEBUFFER_BINDING = 0x8CAA;
exports.RENDERBUFFER_SAMPLES = 0x8CAB;
exports.DEPTH_COMPONENT32F = 0x8CAC;
exports.DEPTH32F_STENCIL8 = 0x8CAD;
exports.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
exports.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4;
exports.FRAMEBUFFER_COMPLETE = 0x8CD5;
exports.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
exports.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
exports.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
exports.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
exports.MAX_COLOR_ATTACHMENTS = 0x8CDF;
exports.COLOR_ATTACHMENT0 = 0x8CE0;
exports.COLOR_ATTACHMENT1 = 0x8CE1;
exports.COLOR_ATTACHMENT2 = 0x8CE2;
exports.COLOR_ATTACHMENT3 = 0x8CE3;
exports.COLOR_ATTACHMENT4 = 0x8CE4;
exports.COLOR_ATTACHMENT5 = 0x8CE5;
exports.COLOR_ATTACHMENT6 = 0x8CE6;
exports.COLOR_ATTACHMENT7 = 0x8CE7;
exports.COLOR_ATTACHMENT8 = 0x8CE8;
exports.COLOR_ATTACHMENT9 = 0x8CE9;
exports.COLOR_ATTACHMENT10 = 0x8CEA;
exports.COLOR_ATTACHMENT11 = 0x8CEB;
exports.COLOR_ATTACHMENT12 = 0x8CEC;
exports.COLOR_ATTACHMENT13 = 0x8CED;
exports.COLOR_ATTACHMENT14 = 0x8CEE;
exports.COLOR_ATTACHMENT15 = 0x8CEF;
exports.DEPTH_ATTACHMENT = 0x8D00;
exports.STENCIL_ATTACHMENT = 0x8D20;
exports.FRAMEBUFFER = 0x8D40;
exports.RENDERBUFFER = 0x8D41;
exports.RENDERBUFFER_WIDTH = 0x8D42;
exports.RENDERBUFFER_HEIGHT = 0x8D43;
exports.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
exports.STENCIL_INDEX8 = 0x8D48;
exports.RENDERBUFFER_RED_SIZE = 0x8D50;
exports.RENDERBUFFER_GREEN_SIZE = 0x8D51;
exports.RENDERBUFFER_BLUE_SIZE = 0x8D52;
exports.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
exports.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
exports.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
exports.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56;
exports.MAX_SAMPLES = 0x8D57;
exports.RGB565 = 0x8D62;
exports.ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A;
exports.MAX_ELEMENT_INDEX = 0x8D6B;
exports.RGBA32UI = 0x8D70;
exports.RGB32UI = 0x8D71;
exports.RGBA16UI = 0x8D76;
exports.RGB16UI = 0x8D77;
exports.RGBA8UI = 0x8D7C;
exports.RGB8UI = 0x8D7D;
exports.RGBA32I = 0x8D82;
exports.RGB32I = 0x8D83;
exports.RGBA16I = 0x8D88;
exports.RGB16I = 0x8D89;
exports.RGBA8I = 0x8D8E;
exports.RGB8I = 0x8D8F;
exports.RED_INTEGER = 0x8D94;
exports.RGB_INTEGER = 0x8D98;
exports.RGBA_INTEGER = 0x8D99;
exports.INT_2_10_10_10_REV = 0x8D9F;
exports.FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
exports.SAMPLER_2D_ARRAY = 0x8DC1;
exports.SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
exports.SAMPLER_CUBE_SHADOW = 0x8DC5;
exports.UNSIGNED_INT_VEC2 = 0x8DC6;
exports.UNSIGNED_INT_VEC3 = 0x8DC7;
exports.UNSIGNED_INT_VEC4 = 0x8DC8;
exports.INT_SAMPLER_2D = 0x8DCA;
exports.INT_SAMPLER_3D = 0x8DCB;
exports.INT_SAMPLER_CUBE = 0x8DCC;
exports.INT_SAMPLER_2D_ARRAY = 0x8DCF;
exports.UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
exports.UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
exports.UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
exports.UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
exports.LOW_FLOAT = 0x8DF0;
exports.MEDIUM_FLOAT = 0x8DF1;
exports.HIGH_FLOAT = 0x8DF2;
exports.LOW_INT = 0x8DF3;
exports.MEDIUM_INT = 0x8DF4;
exports.HIGH_INT = 0x8DF5;
exports.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
exports.MAX_VARYING_VECTORS = 0x8DFC;
exports.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
exports.TRANSFORM_FEEDBACK = 0x8E22;
exports.TRANSFORM_FEEDBACK_PAUSED = 0x8E23;
exports.TRANSFORM_FEEDBACK_ACTIVE = 0x8E24;
exports.TRANSFORM_FEEDBACK_BINDING = 0x8E25;
exports.COPY_READ_BUFFER = 0x8F36;
exports.COPY_READ_BUFFER_BINDING = 0x8F36;
exports.COPY_WRITE_BUFFER = 0x8F37;
exports.COPY_WRITE_BUFFER_BINDING = 0x8F37;
exports.R8_SNORM = 0x8F94;
exports.RG8_SNORM = 0x8F95;
exports.RGB8_SNORM = 0x8F96;
exports.RGBA8_SNORM = 0x8F97;
exports.SIGNED_NORMALIZED = 0x8F9C;
exports.RGB10_A2UI = 0x906F;
exports.MAX_SERVER_WAIT_TIMEOUT = 0x9111;
exports.OBJECT_TYPE = 0x9112;
exports.SYNC_CONDITION = 0x9113;
exports.SYNC_STATUS = 0x9114;
exports.SYNC_FLAGS = 0x9115;
exports.SYNC_FENCE = 0x9116;
exports.SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
exports.UNSIGNALED = 0x9118;
exports.SIGNALED = 0x9119;
exports.ALREADY_SIGNALED = 0x911A;
exports.TIMEOUT_EXPIRED = 0x911B;
exports.CONDITION_SATISFIED = 0x911C;
exports.WAIT_FAILED = 0x911D;
exports.MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
exports.MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
exports.TEXTURE_IMMUTABLE_FORMAT = 0x912F;
exports.UNPACK_FLIP_Y_WEBGL = 0x9240;
exports.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
exports.CONTEXT_LOST_WEBGL = 0x9242;
exports.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
exports.BROWSER_DEFAULT_WEBGL = 0x9244;
exports.MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;
exports.INVALID_INDEX = 0xFFFFFFFF;
