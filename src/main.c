/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_atanh.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/atanh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

static const double NEAR_ZERO = 1.0 / (1 << 28); // 2**-28

/**
* Computes the hyperbolic arctangent of a number.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_atanh( 0.0 );
* // returns 0.0
*/
double stdlib_base_atanh( const double x ) {
	int32_t sgn = 0;
	double xc = x;
	double t;
	if ( stdlib_base_is_nan( xc ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( xc < -1.0 || xc > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( xc == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( xc == -1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( xc < 0.0 ) {
		sgn = 1;
		xc = -xc;
	}
	// Case: |x| < 2**-28
	if ( xc < NEAR_ZERO ) {
		return ( sgn == 1 ) ? -xc : xc;
	}
	if ( xc < 0.5 ) {
		t = xc + xc;
		t = 0.5 * stdlib_base_log1p( t + ( t * xc / ( 1 - xc ) ) );
	} else {
		t = 0.5 * stdlib_base_log1p( ( xc + xc ) / ( 1 - xc ) );
	}
	return ( sgn == 1 ) ? -t : t;
}
