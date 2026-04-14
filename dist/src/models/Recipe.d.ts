import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        ingredients: string[];
        title?: string | null;
        instructions?: string | null;
        image?: string | null;
        createdBy?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        ingredients: string[];
        title?: string | null;
        instructions?: string | null;
        image?: string | null;
        createdBy?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    ingredients: string[];
    title?: string | null;
    instructions?: string | null;
    image?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=Recipe.d.ts.map