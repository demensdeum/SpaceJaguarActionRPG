#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDPLAYEROWNEROBJECTCONTROLSDELEGATE_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDPLAYEROWNEROBJECTCONTROLSDELEGATE_H_

namespace SpaceJaguarActionRPG {
class PlayerOwnerObjectControls;
};

namespace SpaceJaguarActionRPG {

class PlayerOwnerObjectControlsDelegate {
public:
	virtual void playerOwnerObjectControlsDidFinish(shared_ptr<PlayerOwnerObjectControls> playerOwnerObjectControls) = 0;
};
};

#endif