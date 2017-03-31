﻿import * as ts from "typescript";
import {Node} from "./../common";
import {PropertyNamedNode, StaticableNode} from "./../base";
import {FunctionLikeDeclaration} from "./../function";
import {AbstractableNode, ScopedNode} from "./base";

export const MethodDeclarationBase = AbstractableNode(ScopedNode(StaticableNode(FunctionLikeDeclaration(PropertyNamedNode(Node)))));
export class MethodDeclaration extends MethodDeclarationBase<ts.MethodDeclaration> {
}