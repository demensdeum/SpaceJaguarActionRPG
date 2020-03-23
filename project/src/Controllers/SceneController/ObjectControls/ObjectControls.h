#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDOBJECTCONTROLS_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDOBJECTCONTROLS_H_

#include <FlameSteelCore/Object.h>

namespace SpaceJaguarActionRPG {

class ObjectControls: public Object {

public:
	virtual void step() = 0;

};
};

#endif