import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
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
        email: string;
        password: string;
        profileImage: string;
        favorites: mongoose.Types.ObjectId[];
        name?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        email: string;
        password: string;
        profileImage: string;
        favorites: mongoose.Types.ObjectId[];
        name?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    password: string;
    profileImage: string;
    favorites: mongoose.Types.ObjectId[];
    name?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=User.d.ts.map