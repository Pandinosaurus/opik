/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const JsonListStringCompare: core.serialization.Schema<
    serializers.JsonListStringCompare.Raw,
    OpikApi.JsonListStringCompare
> = core.serialization.undiscriminatedUnion([
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    core.serialization.list(core.serialization.record(core.serialization.string(), core.serialization.unknown())),
    core.serialization.string(),
]);

export declare namespace JsonListStringCompare {
    export type Raw = Record<string, unknown> | Record<string, unknown>[] | string;
}
